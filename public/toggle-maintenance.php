<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// CONFIGURATION
$secret_key = "admin123"; // CHANGE THIS PASSWORD!
$file_path = 'maintenance.json';

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$action = $_GET['action'] ?? '';
$json_input = file_get_contents('php://input');
$data = json_decode($json_input, true);

// 1. READ STATUS
if ($action === 'status') {
    if (file_exists($file_path)) {
        echo file_get_contents($file_path);
    } else {
        echo json_encode(["maintenance_mode" => false]);
    }
    exit;
}

// 2. TOGGLE STATUS (PROTECTED)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $provided_key = $data['key'] ?? '';
    
    if ($provided_key !== $secret_key) {
        http_response_code(401);
        echo json_encode(["status" => "error", "message" => "Unauthorized"]);
        exit;
    }

    $new_status = $data['maintenance_mode'] ?? false;
    $content = json_encode(["maintenance_mode" => (bool)$new_status]);
    
    if (file_put_contents($file_path, $content)) {
        echo json_encode(["status" => "success", "maintenance_mode" => $new_status]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to write file"]);
    }
    exit;
}
?>

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

// Get JSON input
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid JSON data"]);
    exit;
}

// --- CONFIGURATION ---
$from_email = "sales@fiberinternetonline.my"; 
$admin_email = "sales@fiberinternetonline.my"; 

// Helper to clean input for HTML safety
function clean($str) { 
    return htmlspecialchars($str ?? '', ENT_QUOTES, 'UTF-8');
}
 
$user_name = clean($data['name']);
$user_email = clean($data['email']);
$user_phone = clean($data['phone']);
$original_message = nl2br(clean($data['message'])); // Convert newlines to <br>
$subject_text = clean($data['subject'] ?? 'Website Inquiry');

// --- 1. ADMIN NOTIFICATION EMAIL (HTML) ---

$admin_subject = "New Lead: " . $subject_text;

// HTML Template for Admin
$admin_message = <<<HTML
<html>
<div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f3f4f6; padding: 40px 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    
    <!-- Admin Header -->
    <div style="background-color: #6b21a8; padding: 30px; text-align: center;">
      <h2 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">🚀 New Lead Received</h2>
    </div>

    <!-- Main Content -->
    <div style="padding: 30px;">
      <p style="font-size: 16px; color: #374151; margin-bottom: 20px;"><strong>Hello Admin,</strong></p>
      <p style="font-size: 15px; color: #4b5563; margin-bottom: 25px;">You have received a new form submission from the website. Here are the details:</p>
      
      <!-- Data Table -->
      <table style="width: 100%; border-collapse: separate; border-spacing: 0; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 14px;">
        <tr style="background-color: #f9fafb;">
          <td style="padding: 12px 15px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1f2937; width: 30%;">Name</td>
          <td style="padding: 12px 15px; border-bottom: 1px solid #e5e7eb; color: #4b5563;">$user_name</td>
        </tr>
        <tr>
          <td style="padding: 12px 15px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1f2937;">Email</td>
          <td style="padding: 12px 15px; border-bottom: 1px solid #e5e7eb; color: #4b5563;">$user_email</td>
        </tr>
        <tr style="background-color: #f9fafb;">
          <td style="padding: 12px 15px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #1f2937;">Phone</td>
          <td style="padding: 12px 15px; border-bottom: 1px solid #e5e7eb; color: #4b5563;">$user_phone</td>
        </tr>
        <tr>
          <td style="padding: 12px 15px; font-weight: bold; color: #1f2937;">Subject</td>
          <td style="padding: 12px 15px; color: #4b5563;">$subject_text</td>
        </tr>
      </table>

      <!-- Full Message / Details -->
      <div style="margin-top: 25px;">
        <h3 style="color: #6b21a8; font-size: 16px; margin-bottom: 10px; border-bottom: 2px solid #f3f4f6; padding-bottom: 5px;">Full Submission Details:</h3>
        <div style="background-color: #faf5ff; padding: 15px; border-radius: 8px; border-left: 4px solid #9333ea; color: #374151; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">$original_message</div>
      </div>
      
      <div style="margin-top: 30px; text-align: center;">
        <a href="mailto:$user_email" style="background-color: #1f2937; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 30px; font-weight: bold; display: inline-block;">Reply Customer</a>
      </div>

    </div>
  </div>
</div>
</html>
HTML;

$admin_headers = "From: Time Authorized Distributor <" . $from_email . ">\r\n";
$admin_headers .= "Reply-To: " . $user_email . "\r\n";
$admin_headers .= "MIME-Version: 1.0\r\n";
$admin_headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Set envelope sender via -f parameter to prevent spam filtering
$params = "-f" . $from_email;
$admin_sent = mail($admin_email, $admin_subject, $admin_message, $admin_headers, $params);


// --- 2. AUTO-REPLY TO CUSTOMER (HTML) ---

$start_date = date("d/m/Y"); 
$start_time = date("h:i A");

$reply_subject = "We received your request! - Time Authorized Distributor";

// HTML Template for Customer
$reply_message = <<<HTML
<html>
<div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f3f4f6; padding: 40px 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    
    <!-- Brand Header -->
    <div style="background-color: #ffffff; padding: 25px; text-align: center; border-bottom: 4px solid #E6007E;">
       <!-- If you have a hosted logo link, replace the text below with an <img> tag -->
       <h1 style="color: #6b21a8; margin: 0; font-family: sans-serif; font-weight: 800; font-size: 28px;">TIME <span style="color: #E6007E;">Fiber</span></h1>
    </div>

    <!-- Customer Content -->
    <div style="padding: 35px 30px;">
      <h2 style="color: #1f2937; margin-top: 0; font-size: 22px;">Request Received</h2>
      <p style="font-size: 16px; color: #4b5563; margin-bottom: 20px;">Hi <strong>$user_name</strong>,</p>
      
      <p style="font-size: 16px; color: #4b5563; line-height: 1.6; margin-bottom: 15px;">
        Thank you for choosing <strong>Fiber Internet Online</strong>. We have successfully received your request!
      </p> 
      <p style="font-size: 16px; color: #4b5563; line-height: 1.6; margin-bottom: 30px;">
        Our team is currently reviewing your details to check coverage availability at your location. We will contact you shortly via <strong>WhatsApp</strong> or <strong>Phone Call</strong> to confirm the installation next steps.
      </p>

      <!-- Receipt Box -->
      <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
        <p style="margin: 0 0 10px 0; color: #6b21a8; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Your Submission Copy:</p>
        <p style="margin: 0; color: #6b7280; font-size: 14px; white-space: pre-wrap; line-height: 1.5; font-family: monospace;">$original_message</p>
      </div>

    </div>

    <!-- Footer -->
    <div style="background-color: #1f2937; padding: 20px; text-align: center;">
      <p style="color: #9ca3af; font-size: 12px; margin: 0; line-height: 1.5;">
        TIME Authorized Distributor<br>
        <a href="https://fiberinternetonline.my" style="color: #E6007E; text-decoration: none;">www.fiberinternetonline.my</a>
      </p>
    </div>
  </div>
</div>
</html>
HTML;

$reply_headers = "From: Time Authorized Distributor <" . $from_email . ">\r\n";
$reply_headers .= "Reply-To: " . $admin_email . "\r\n";
$reply_headers .= "MIME-Version: 1.0\r\n";
$reply_headers .= "Content-Type: text/html; charset=UTF-8\r\n";

if (filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
    mail($user_email, $reply_subject, $reply_message, $reply_headers, $params);
}

if ($admin_sent) {
    echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
} else {
    http_response_code(500);
    $error_info = error_get_last();
    $error_msg = $error_info ? $error_info['message'] : 'Unknown mail() failure';
    echo json_encode(["status" => "error", "message" => "Failed to send email. Error: " . $error_msg]);
}
?>

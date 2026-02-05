import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import Maintenance from "@/components/Maintenance";
import React from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const [maintenanceMode, setMaintenanceMode] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
      // If we are on the admin page, skip the maintenance check
      if (router.pathname === '/admin') {
          setIsLoading(false);
          return;
      }

      fetch('/maintenance.json')
        .then(res => res.json())
        .then(data => {
           setMaintenanceMode(data.maintenance_mode);
           setIsLoading(false);
        })
        .catch(() => {
           setIsLoading(false); // Default to online if error
        });
  }, [router.pathname]);

  if (isLoading) return null; // Or a loading spinner
  if (maintenanceMode) return <Maintenance />;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

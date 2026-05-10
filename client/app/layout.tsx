import type { Metadata } from "next";
import "@/styles/globals.css";
import { AppProviders } from "@/lib/app-providers";

export const metadata: Metadata = {
  title: "Shannon",
  description: "Operational runtime for multi-agent workflows"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}

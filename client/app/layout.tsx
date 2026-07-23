import type { Metadata } from "next";
import "@/styles/globals.css";
import { AppProviders } from "@/lib/app-providers";

export const metadata: Metadata = {
  title: "Shannon",
  description: "AI-native thinking workspace",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}

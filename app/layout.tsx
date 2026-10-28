import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "People & Data | Analytics Portfolio",
  description:
    "Turning people data into clear, practical insights through analytics, data cleaning, and thoughtful automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-autumn-ivory font-sans text-autumn-navy antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Form Validation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white">{children}</body>
    </html>
  );
}

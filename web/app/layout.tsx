import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Man Eating Ice Cream",
  description: "Stylized illustration of a man enjoying an ice cream cone."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

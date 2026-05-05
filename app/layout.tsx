import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iyamuremye Sergine — Portfolio",
  description: "Software engineer & student based in Rwanda.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

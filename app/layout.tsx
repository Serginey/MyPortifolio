import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iyamuremye Sergine — Full-Stack Developer & UI/UX Designer",
  description:
    "Full-stack developer and UI/UX designer in Kigali, Rwanda. React, Next.js, Tailwind CSS, Node.js — from Figma to production.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

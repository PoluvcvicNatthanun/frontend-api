import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

// ดึงฟอนต์ Kanit และตั้งค่า Variable
const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "ระบบสมาชิกนักศึกษา CMTC",
  description: "ระบบจัดการข้อมูลและสมาชิกนักศึกษา",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${kanit.variable} overflow-x-hidden`}>
      {/* ใส่ font-sans และ className ของ kanit ที่ body */}
      <body className={`${kanit.className} font-sans min-h-screen w-full overflow-x-hidden bg-slate-950 text-slate-100 antialiased flex flex-col`}>
        <Navbar />
        <div className="flex-1 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
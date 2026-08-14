"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-cyan-500/20 shadow-[0_4px_20px_-8px_rgba(6,182,212,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent truncate"
          >
            จัดการข้อมูลนักศึกษา
          </Link>

          {/* Desktop Menu (ซ่อนในมือถือด้วย hidden md:flex) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-slate-300 font-medium">
            <Link href="/" className="hover:text-cyan-400 transition duration-300">
              หน้าแรก
            </Link>
            <Link href="/users" className="hover:text-cyan-400 transition duration-300">
              ผู้ใช้งาน
            </Link>
            <Link href="/about" className="hover:text-cyan-400 transition duration-300">
              เกี่ยวกับ
            </Link>
            <Link href="/service" className="hover:text-cyan-400 transition duration-300">
              บริการของเรา
            </Link>
            <Link href="/contact" className="hover:text-cyan-400 transition duration-300">
              ติดต่อ
            </Link>
            <Link
              href="/register"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_6px_18px_-6px_rgba(6,182,212,0.6)] hover:shadow-[0_8px_22px_-6px_rgba(6,182,212,0.75)] hover:scale-105 transition duration-300"
            >
              ลงทะเบียน
            </Link>
          </div>

          {/* Mobile Hamburger Button (แสดงเฉพาะบนมือถือ) */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 text-slate-300 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown (สไลด์ลงมาเฉพาะตอนเปิดปุ่มบนมือถือ) */}
      {isOpen && (
        <div className="md:hidden border-b border-cyan-500/20 bg-slate-950/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900 transition"
          >
            หน้าแรก
          </Link>
          <Link
            href="/users"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900 transition"
          >
            ผู้ใช้งาน
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900 transition"
          >
            เกี่ยวกับ
          </Link>
          <Link
            href="/service"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900 transition"
          >
            บริการของเรา
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900 transition"
          >
            ติดต่อ
          </Link>
          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md"
          >
            ลงทะเบียน
          </Link>
        </div>
      )}
    </nav>
  );
}
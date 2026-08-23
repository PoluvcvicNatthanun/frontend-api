"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, LogIn, LogOut, UserPlus } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(null);
  const router = useRouter();

  // ตรวจสอบ Token เมื่อ Component โหลด
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // ฟังก์ชันออกจากระบบ
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/login");
  };

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

          {/* Desktop Menu */}
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

            {/* Desktop Auth Buttons */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
              {token ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 font-semibold hover:bg-rose-500 hover:text-white transition-all text-sm"
                >
                  <LogOut className="w-4 h-4" />
                  ออกจากระบบ
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold hover:bg-slate-800 transition-all text-sm"
                  >
                    <LogIn className="w-4 h-4" />
                    เข้าสู่ระบบ
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg hover:brightness-110 transition-all text-sm"
                  >
                    <UserPlus className="w-4 h-4" />
                    สมัครสมาชิก
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Hamburger Button */}
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

      {/* Mobile Menu Dropdown */}
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

          {/* Mobile Auth Buttons */}
          <div className="pt-4 border-t border-slate-800 space-y-2">
            {token ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 font-semibold hover:bg-rose-500 hover:text-white transition-all text-sm"
              >
                <LogOut className="w-4 h-4" />
                ออกจากระบบ
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold hover:bg-slate-800 transition-all text-sm"
                >
                  <LogIn className="w-4 h-4" />
                  เข้าสู่ระบบ
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg hover:brightness-110 transition-all text-sm"
                >
                  <UserPlus className="w-4 h-4" />
                  สมัครสมาชิก
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
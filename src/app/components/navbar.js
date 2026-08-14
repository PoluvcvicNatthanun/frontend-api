import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-cyan-500/20 shadow-[0_4px_20px_-8px_rgba(6,182,212,0.15)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            จัดการข้อมูลนักศึกษา
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-8 text-slate-300 font-medium">

            <Link
              href="/"
              className="hover:text-cyan-400 transition duration-300"
            >
              หน้าแรก
            </Link>

            <Link
              href="/about"
              className="hover:text-cyan-400 transition duration-300"
            >
              เกี่ยวกับ
            </Link>

            <Link
              href="/service"
              className="hover:text-cyan-400 transition duration-300"
            >
              บริการของเรา
            </Link>

            <Link
              href="/contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              ติดต่อ
            </Link>

            <Link
              href="/register"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_6px_18px_-6px_rgba(6,182,212,0.6)] hover:shadow-[0_8px_22px_-6px_rgba(6,182,212,0.75)] hover:scale-105 transition duration-300"
            >
              สมัครสมาชิก
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}
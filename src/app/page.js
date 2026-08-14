import Link from "next/link";
import {
  UserPlus,
  ShieldCheck,
  Zap,
  Smartphone,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: ShieldCheck,
      title: "ปลอดภัย เชื่อถือได้",
      desc: "ข้อมูลนักศึกษาถูกจัดเก็บอย่างปลอดภัย ตรวจสอบสิทธิ์ทุกการเข้าใช้งาน",
    },
    {
      icon: Zap,
      title: "รวดเร็ว ทันใจ",
      desc: "สมัครสมาชิกและเข้าใช้งานระบบได้ภายในไม่กี่ขั้นตอน ไม่ยุ่งยาก",
    },
    {
      icon: Smartphone,
      title: "ใช้งานได้ทุกที่",
      desc: "รองรับทุกอุปกรณ์ ทั้งคอมพิวเตอร์ แท็บเล็ต และมือถือ",
    },
  ];

  return (
    // เพิ่ม w-full และ overflow-x-hidden เพื่อบล็อกไม่ให้องค์ประกอบล้นขอบจอมือถือ
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-slate-950">
      
      {/* Background Decorative - ปรับ max-w เพื่อไม่ให้เด้งล้นจอมือถือ */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-blue-600/15 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <main className="relative flex-1 w-full max-w-5xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-36 text-center">
        {/* badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 ring-1 ring-cyan-400/30 px-3.5 py-1.5 text-xs font-medium text-cyan-300">
          <GraduationCap className="h-3.5 w-3.5 shrink-0" />
          <span>ระบบสมาชิกนักศึกษา CMTC</span>
        </div>

        {/* headline - ปรับขนาดฟอนต์บนมือถือให้พอดี ไม่เบี้ยว */}
        <h1 className="max-w-2xl text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-white">
          จัดการข้อมูลนักศึกษา
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            ในที่เดียว ครบ จบ ง่าย
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-lg leading-relaxed sm:leading-8 text-slate-400">
          ระบบสมาชิกสำหรับนักศึกษา สมัครใช้งานได้ทันที เข้าถึงข้อมูลและบริการ
          ต่าง ๆ ของวิทยาลัยได้อย่างสะดวกและปลอดภัย
        </p>

        {/* CTA - ปุ่มปรับ w-full บนมือถือเพื่อให้แตะง่าย */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto px-4 sm:px-0">
          <Link
            href="/register"
            className="group flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 text-sm font-semibold text-white shadow-[0_10px_25px_-8px_rgba(6,182,212,0.6)] hover:shadow-[0_14px_30px_-8px_rgba(6,182,212,0.75)] active:scale-95 transition-all duration-300"
          >
            <UserPlus className="h-4 w-4" />
            ลงทะเบียน
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/about"
            className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-slate-700 px-7 text-sm font-semibold text-slate-200 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-slate-900/50 active:scale-95 transition-all duration-300"
          >
            เกี่ยวกับเรา
          </Link>
        </div>

        {/* feature cards */}
        <div className="mt-16 sm:mt-24 grid w-full grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 text-left">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-2xl bg-slate-900/60 backdrop-blur-sm ring-1 ring-slate-800 p-5 sm:p-6 hover:ring-cyan-500/30 transition-all duration-300"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-400/30">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-6 text-slate-400">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
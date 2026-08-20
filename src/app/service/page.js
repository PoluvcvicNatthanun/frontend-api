import Link from "next/link";
import {
  UserCheck,
  FileText,
  Clock,
  ShieldAlert,
  Database,
  Headphones,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: UserCheck,
      title: "ระบบลงทะเบียนนักศึกษา",
      desc: "สมัครสมาชิก สมัครเข้าใช้งานระบบออนไลน์ง่ายๆ เพียงไม่กี่ขั้นตอน พร้อมระบบยืนยันตัวตนที่ปลอดภัย",
    },
    {
      icon: FileText,
      title: "สืบค้นข้อมูล และประวัติ",
      desc: "ตรวจสอบข้อมูลส่วนตัว ประวัติการศึกษา และสถานะนักศึกษาได้ตลอด 24 ชั่วโมง ผ่านระบบออนไลน์",
    },
    {
      icon: Database,
      title: "จัดการฐานข้อมูลสารสนเทศ",
      desc: "จัดเก็บและรวบรวมข้อมูลนักศึกษาอย่างเป็นระบบ รองรับการค้นหาและอัปเดตข้อมูลได้อย่างรวดเร็ว",
    },
    {
      icon: Clock,
      title: "ติดตามสถานะคำร้อง",
      desc: "ยื่นคำร้องและติดตามสถานะอนุมัติเอกสารต่างๆ ได้แบบ Real-time ไม่ต้องเดินทางมาวิทยาลัย",
    },
    {
      icon: ShieldAlert,
      title: "การรักษาความปลอดภัยขั้นสูง",
      desc: "ปกป้องข้อมูลส่วนบุคคลด้วยระบบรับรองสิทธิ์ ป้องกันการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาต",
    },
    {
      icon: Headphones,
      title: "ศูนย์ช่วยเหลือและบริการ",
      desc: "มีทีมงานคอยให้คำปรึกษา แนะนำการใช้งาน และแก้ไขปัญหาการเข้าใช้ระบบตลอดเวลาทำการ",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-slate-950">
      
      {/* Background Decorative - คุมธีมตามหน้า Home */}
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

      <main className="relative flex-1 w-full max-w-5xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-28 text-center">
        
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 ring-1 ring-cyan-400/30 px-3.5 py-1.5 text-xs font-medium text-cyan-300">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
          <span>บริการของเรา — Our Services</span>
        </div>

        {/* Headline */}
        <h1 className="max-w-2xl text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-white">
          บริการดิจิทัลครบวงจร
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            เพื่อนักศึกษา CMTC ทุกคน
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-lg leading-relaxed sm:leading-8 text-slate-400">
          ยกระดับการให้บริการด้วยระบบสารสนเทศที่ทันสมัย สะดวก รวดเร็ว
          และปลอดภัย ออกแบบมาเพื่อตอบโจทย์ทุกความต้องการของนักศึกษา
        </p>

        {/* Services Grid Cards */}
        <div className="mt-12 sm:mt-16 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-2xl bg-slate-900/60 backdrop-blur-sm ring-1 ring-slate-800 p-6 hover:ring-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-400/30 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action Card */}
        <div className="mt-16 sm:mt-20 w-full rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-12 ring-1 ring-slate-800 text-center relative overflow-hidden">
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            เริ่มต้นใช้งานบริการของเราวันนี้
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            เข้าถึงระบบลงทะเบียนและบริการสารสนเทศต่าง ๆ ของวิทยาลัยได้ง่าย ๆ เพียงสมัครสมาชิก
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/register"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 text-sm font-semibold text-white shadow-[0_10px_25px_-8px_rgba(6,182,212,0.6)] hover:shadow-[0_14px_30px_-8px_rgba(6,182,212,0.75)] active:scale-95 transition-all duration-300"
            >
              ลงทะเบียนเข้าใช้งาน
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
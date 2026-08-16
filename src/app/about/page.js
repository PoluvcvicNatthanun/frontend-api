import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { label: "นักศึกษาในระบบ", value: "1,500+" },
    { label: "แผนกวิชา", value: "12+" },
    { label: "การเข้าใช้งาน/วัน", value: "99.9%" },
  ];

  const highlights = [
    {
      title: "วิสัยทัศน์ (Vision)",
      desc: "มุ่งมั่นพัฒนาระบบเทคโนโลยีสารสนเทศเพื่อยกระดับการบริหารจัดการข้อมูลนักศึกษาให้มีประสิทธิภาพ รวดเร็ว และเข้าถึงง่ายในยุคดิจิทัล",
      svg: (
        <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "พันธกิจ (Mission)",
      desc: "ให้บริการระบบสืบค้นและจัดการข้อมูลสารสนเทศนักศึกษาด้วยความปลอดภัยสูงสุด สนับสนุนการพัฒนานวัตกรรมและเทคโนโลยีเพื่อการศึกษา",
      svg: (
        <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "เป้าหมาย (Goals)",
      desc: "สร้างแพลตฟอร์มการใช้งานที่ครอบคลุมทุกอุปกรณ์ พร้อมโครงสร้างระบบที่รองรับการขยายตัวและเชื่อมต่อกับระบบงานอื่นๆ ในอนาคต",
      svg: (
        <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-slate-950">
      {/* Decorative Background Elements */}
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

      <main className="relative flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        {/* Top Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 ring-1 ring-cyan-400/30 px-3.5 py-1.5 text-xs font-medium text-cyan-300">
          <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>เกี่ยวกับเรา — About Us</span>
        </div>

        {/* Heading */}
        <h1 className="max-w-3xl mx-auto text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-white">
          วิทยาลัยเทคนิคเชียงใหม่
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Chiang Mai Technical College (CMTC)
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed sm:leading-8 text-slate-400">
          ระบบสารสนเทศเพื่อการจัดการข้อมูลนักศึกษา พัฒนาขึ้นเพื่อช่วยอำนวยความสะดวก
          ในการเข้าถึงข้อมูล ตรวจสอบสถานะ และให้บริการต่างๆ แก่นักศึกษาและบุคลากรอย่างมีประสิทธิภาพ
        </p>

        {/* Quick Stats Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-slate-800/80 py-8">
          {stats.map((item) => (
            <div key={item.label} className="p-2">
              <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {item.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-slate-400 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Vision & Mission Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-slate-900/60 backdrop-blur-sm ring-1 ring-slate-800 p-6 hover:ring-cyan-500/30 transition-all duration-300"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-400/30">
                {item.svg}
              </div>
              <h3 className="text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 sm:mt-20 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-12 ring-1 ring-slate-800 text-center relative overflow-hidden">
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            พร้อมเริ่มต้นใช้งานระบบแล้วหรือยัง?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            ลงทะเบียนเข้าใช้งานวันนี้เพื่อเข้าถึงสิทธิ์การจัดการข้อมูลนักศึกษาอย่างเต็มรูปแบบ
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/register"
              className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 text-sm font-semibold text-white shadow-[0_10px_25px_-8px_rgba(6,182,212,0.6)] hover:shadow-[0_14px_30px_-8px_rgba(6,182,212,0.75)] active:scale-95 transition-all duration-300"
            >
              ลงทะเบียนทันที
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
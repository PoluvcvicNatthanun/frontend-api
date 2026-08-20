import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "ที่อยู่",
      desc: "วิทยาลัยเทคนิคเชียงใหม่ 9 ถ.เวียงแก้ว ต.ศรีภูมิ อ.เมือง จ.เชียงใหม่ 50200",
    },
    {
      icon: Phone,
      title: "เบอร์โทรศัพท์",
      desc: "053-217-708 (ในวันและเวลาราชการ)",
    },
    {
      icon: Mail,
      title: "อีเมล",
      desc: "info@cmtc.ac.th",
    },
    {
      icon: Clock,
      title: "เวลาทำการ",
      desc: "จันทร์ - ศุกร์ : 08:30 - 16:30 น.",
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

      <main className="relative flex-1 w-full max-w-5xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-28">
        
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 ring-1 ring-cyan-400/30 px-3.5 py-1.5 text-xs font-medium text-cyan-300">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
          <span>ติดต่อเรา — Contact Us</span>
        </div>

        {/* Headline */}
        <h1 className="max-w-2xl text-center text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-white">
          มีข้อสงสัยหรือต้องการ
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            ความช่วยเหลือเพิ่มเติม?
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-center max-w-xl text-sm sm:text-lg leading-relaxed sm:leading-8 text-slate-400">
          ทีมงานระบบสมาชิกนักศึกษา CMTC พร้อมให้คำแนะนำและช่วยเหลือคุณในทุกขั้นตอน
        </p>

        {/* Contact Layout Grid */}
        <div className="mt-12 sm:mt-16 grid w-full grid-cols-1 lg:grid-cols-5 gap-8 text-left">
          
          {/* Left Side: Contact Info Cards (2 Columns width on LG) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-slate-900/60 backdrop-blur-sm ring-1 ring-slate-800 p-5 hover:ring-cyan-500/30 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-400/30">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Message Form (3 Columns width on LG) */}
          <div className="lg:col-span-3 rounded-3xl bg-slate-900/60 backdrop-blur-sm ring-1 ring-slate-800 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="h-5 w-5 text-cyan-400" />
              <h2 className="text-lg font-bold text-white">ส่งข้อความถึงเรา</h2>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    ชื่อ-นามสกุล
                  </label>
                  <input
                    type="text"
                    placeholder="นายสมชาย ใจดี"
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    รหัสนักศึกษา / อีเมล
                  </label>
                  <input
                    type="text"
                    placeholder="6630000000 / email@example.com"
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  หัวข้อเรื่อง
                </label>
                <input
                  type="text"
                  placeholder="เช่น สอบถามปัญหาการลงทะเบียน, ลืมรหัสผ่าน"
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  รายละเอียดข้อความ
                </label>
                <textarea
                  rows={4}
                  placeholder="พิมพ์ข้อความของคุณที่นี่..."
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                />
              </div>

              <button
                type="button"
                className="group w-full flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 text-sm font-semibold text-white shadow-[0_10px_25px_-8px_rgba(6,182,212,0.6)] hover:shadow-[0_14px_30px_-8px_rgba(6,182,212,0.75)] active:scale-95 transition-all duration-300"
              >
                <Send className="h-4 w-4" />
                ส่งข้อความ
              </button>
            </form>
          </div>

        </div>

      </main>
    </div>
  );
}
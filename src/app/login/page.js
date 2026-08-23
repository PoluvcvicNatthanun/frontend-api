"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";
import { LogIn, User, Lock, ArrowRight, Sparkles, Eye, EyeOff } from "lucide-react";

const LOGIN_URL = "https://6a7e6ee33183f5fd884a133a.mockapi.io/Fontend-api";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      await Swal.fire({
        icon: "warning",
        title: "กรอกข้อมูลไม่ครบถ้วน",
        text: "กรุณากรอก Username และ Password",
        confirmButtonColor: "#06b6d4",
        background: "#0f172a",
        color: "#f8fafc",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      }

      // บันทึก Token ลง localStorage
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      await Swal.fire({
        icon: "success",
        title: "เข้าสู่ระบบสำเร็จ",
        text: "กำลังนำคุณเข้าสู่ระบบ...",
        timer: 1500,
        showConfirmButton: false,
        background: "#0f172a",
        color: "#f8fafc",
      });

      router.push("/");
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "เข้าสู่ระบบไม่สำเร็จ",
        text: error.message || "เกิดข้อผิดพลาดในการเชื่อมต่อระบบ",
        confirmButtonColor: "#06b6d4",
        background: "#0f172a",
        color: "#f8fafc",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-12">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-10 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob" />
        <div className="absolute bottom-1/4 -right-10 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <main className="relative z-10 w-full max-w-md">
        {/* Card Container */}
        <div className="rounded-3xl bg-slate-900/60 p-8 sm:p-10 backdrop-blur-xl border border-slate-800 shadow-2xl shadow-cyan-950/20">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 border border-slate-700 text-cyan-400 mb-4 shadow-inner">
              <LogIn className="h-6 w-6" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              DevMaster Portal
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ยินดีต้อนรับกลับมา
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              กรอกข้อมูลเพื่อเข้าสู่ระบบเข้าใช้งาน
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username Input */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                ชื่อผู้ใช้งาน (Username)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="กรอก Username ของคุณ"
                  className="w-full rounded-xl bg-slate-950/80 border border-slate-800 pl-10 pr-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-medium text-slate-300">
                  รหัสผ่าน (Password)
                </label>
                <Link
                  href="#"
                  className="text-xs text-cyan-400 hover:underline transition-all"
                >
                  ลืมรหัสผ่าน?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-xl bg-slate-950/80 border border-slate-800 pl-10 pr-10 py-3 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-bold text-white shadow-lg shadow-cyan-950/50 hover:brightness-110 active:scale-95 disabled:opacity-50 transition-all duration-200 mt-2"
            >
              {isLoading ? (
                <span>กำลังเข้าสู่ระบบ...</span>
              ) : (
                <>
                  <span>เข้าสู่ระบบ</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer Card */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 text-center">
            <p className="text-xs text-slate-400">
              ยังไม่มีบัญชีผู้ใช้งาน?{" "}
              <Link
                href="/register"
                className="font-semibold text-cyan-400 hover:underline transition-all"
              >
                สมัครสมาชิกที่นี่
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
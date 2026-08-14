"use client";
import Swal from "sweetalert2";
import React from "react";
import { useState } from "react";



export default function register() {
  // สร้างตัวแปรเก็บค่าเริ่มต้นไว้สำหรับเรียกใช้ตอนเคลียร์ฟอร์ม
  const initialFormState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialFormState);
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    // ดึงค่า name จาก input (เช่น txt_firstname -> ตัดคำว่า txt_ ออกให้เหลือ firstname เพื่อให้ตรงกับ State)
    const fieldName = e.target.name.replace("txt_", "");
    setForm({
      ...form,
      [fieldName]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const isEmpty = Object.values(form).some(
    (value) => !value || String(value).trim() === ""
  );

  if (isEmpty) {
    await Swal.fire({
      icon: "warning",
      title: "กรุณากรอกข้อมูลให้ครบถ้วน",
      text: "กรุณากรอกข้อมูลในทุกช่องก่อนสมัครสมาชิก",
      confirmButtonText: "ตกลง",
      confirmButtonColor: "#f59e0b",
    });
    return;
  }

  try {
    const response = await fetch("https://6a7e6ee33183f5fd884a133a.mockapi.io/Fontend-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    // กันเคส response ไม่มี body หรือ body ไม่ใช่ JSON (เช่นตอน API ถูกลบ)
    let result = {};
    try {
      result = await response.json();
    } catch {
      result = {};
    }

    if (response.ok) {
      await Swal.fire({
        icon: "success",
        title: `สมัครสมาชิกสำเร็จ (status: ${response.status})`,
        text: `เพิ่มผู้ใช้งานเรียบร้อยแล้ว`,
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#3085d6",
      });
      setForm(initialFormState);

    } else if (response.status === 400) {
      await Swal.fire({
        icon: "warning",
        title: `ข้อมูลไม่ถูกต้อง (status: ${response.status})`,
        text: result.message || "เกิดข้อผิดพลาด",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#fff700",
      });

    } else if (response.status === 404) {
      // เคสนี้เกิดบ่อยตอน API/endpoint ถูกลบหรือเปลี่ยนชื่อ
      await Swal.fire({
        icon: "error",
        title: `ไม่พบปลายทาง API (status: ${response.status})`,
        text: "อาจเป็นเพราะ API ถูกลบหรือ URL ไม่ถูกต้อง กรุณาติดต่อผู้ดูแลระบบ",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#ef4444",
      });

    } else if (response.status === 500) {
      await Swal.fire({
        icon: "error",
        title: `เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์ (status: ${response.status})`,
        text: result.message || "เซิร์ฟเวอร์ขัดข้อง กรุณาลองใหม่อีกครั้งภายหลัง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#ff0000",
      });

    } else {
      // เผื่อ status code อื่น ๆ ที่ไม่ได้ดักไว้ (เช่น 401, 403, 502, 503)
      await Swal.fire({
        icon: "error",
        title: `เกิดข้อผิดพลาดไม่ทราบสาเหตุ (status: ${response.status})`,
        text: result.message || "กรุณาลองใหม่อีกครั้ง หรือติดต่อผู้ดูแลระบบ",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#ef4444",
      });
    }

  } catch (error) {
    // เคสนี้เกิดตอนเน็ตหลุด, CORS ผิด, หรือ URL ผิดจนเรียกไม่ถึงเซิร์ฟเวอร์เลย
    console.error("เกิดข้อผิดพลาด:", error);
    await Swal.fire({
      icon: "warning",
      title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
      text: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณและลองใหม่อีกครั้ง",
      confirmButtonText: "ตกลง",
      confirmButtonColor: "#ff0000",
    });
  }
};
return (
  <div className="min-h-screen relative overflow-hidden bg-slate-950 flex items-center justify-center sm:px-4 sm:py-10">

    {/* decorative glow ให้พื้นหลังมีมิติ แบบ tech grid */}
    <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
    <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full border border-cyan-500/10" />
    {/* เส้น grid บาง ๆ ให้ฟีล IT */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />

    <div className="relative w-full min-h-screen sm:min-h-fit sm:max-w-md bg-slate-900/90 backdrop-blur-xl rounded-none sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] ring-1 ring-cyan-500/20 overflow-hidden flex flex-col justify-center sm:justify-start">

      {/* Header */}
      <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 border-b border-cyan-500/20 text-white text-center py-10 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10" />
        <div className="pointer-events-none absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-blue-500/10" />

        <div className="relative mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/40 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM4 20a8 8 0 0116 0" />
          </svg>
        </div>

        <h1 className="relative text-3xl font-bold text-white">
          ลงทะเบียน
        </h1>
        <p className="relative mt-2 text-sm text-cyan-200/70">
          กรอกข้อมูลเพื่อสร้างบัญชีผู้ใช้งาน
        </p>
      </div>

      {/* Form */}
      <form className="p-6 sm:p-8 space-y-5 flex-1 sm:flex-initial" onSubmit={handleSubmit}>

        <div>
          <label className="block text-slate-300 font-medium mb-1.5 text-sm">
            ชื่อ
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-500/60">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM4 20a8 8 0 0116 0" />
              </svg>
            </span>
            <input
              type="text"
              name="txt_firstname"
              value={form.firstname}
              onChange={handleChange}
              placeholder="กรอกชื่อ"
              className="w-full pl-10 pr-4 py-3 border border-slate-700 bg-slate-800/60 rounded-xl text-slate-100 placeholder-slate-500 shadow-inner focus:outline-none focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-400 focus:bg-slate-800 transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-slate-300 font-medium mb-1.5 text-sm">
            นามสกุล
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-500/60">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM4 20a8 8 0 0116 0" />
              </svg>
            </span>
            <input
              type="text"
              name="txt_lastname"
              value={form.lastname}
              onChange={handleChange}
              placeholder="กรอกนามสกุล"
              className="w-full pl-10 pr-4 py-3 border border-slate-700 bg-slate-800/60 rounded-xl text-slate-100 placeholder-slate-500 shadow-inner focus:outline-none focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-400 focus:bg-slate-800 transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-slate-300 font-medium mb-1.5 text-sm">
            Email
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-500/60">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <input
              type="email"
              name="txt_email"
              value={form.email}
              onChange={handleChange}
              placeholder="กรอก Email"
              className="w-full pl-10 pr-4 py-3 border border-slate-700 bg-slate-800/60 rounded-xl text-slate-100 placeholder-slate-500 shadow-inner focus:outline-none focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-400 focus:bg-slate-800 transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-slate-300 font-medium mb-1.5 text-sm">
            Password
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-500/60">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v2" />
              </svg>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="txt_password"
              value={form.password}
              onChange={handleChange}
              placeholder="กรอก Password"
              className="w-full pl-10 pr-11 py-3 border border-slate-700 bg-slate-800/60 rounded-xl text-slate-100 placeholder-slate-500 shadow-inner focus:outline-none focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-400 focus:bg-slate-800 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-400 transition"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7c1.6 0 3.096.386 4.377 1.06M9.88 9.88a3 3 0 104.24 4.24M6.1 6.1L17.9 17.9" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-[0_10px_25px_-8px_rgba(6,182,212,0.5)] hover:shadow-[0_14px_30px_-8px_rgba(6,182,212,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        >
          สมัครสมาชิก
        </button>
      </form>
    </div>
  </div>
);
}
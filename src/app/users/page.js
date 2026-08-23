"use client";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const API_URL = "https://6a7e6ee33183f5fd884a133a.mockapi.io/Fontend-api";

const AVATAR_PALETTE = [
  { bg: "bg-indigo-100", text: "text-indigo-700" },
  { bg: "bg-rose-100", text: "text-rose-700" },
  { bg: "bg-amber-100", text: "text-amber-700" },
  { bg: "bg-emerald-100", text: "text-emerald-700" },
  { bg: "bg-sky-100", text: "text-sky-700" },
  { bg: "bg-fuchsia-100", text: "text-fuchsia-700" },
];

function getAvatarStyle(name) {
  const code = (name || "?").charCodeAt(0) || 0;
  return AVATAR_PALETTE[code % AVATAR_PALETTE.length];
}

function Avatar({ firstname }) {
  const { bg, text } = getAvatarStyle(firstname);
  const initial = firstname ? firstname.charAt(0).toUpperCase() : "?";
  return (
    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${bg} ${text} font-semibold text-sm`}>
      {initial}
    </div>
  );
}

function SkeletonRow() {
  return (
    <tr className="border-b border-slate-100">
      <td className="p-3"><div className="h-4 w-6 animate-pulse rounded bg-slate-200" /></td>
      <td className="p-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 animate-pulse rounded-full bg-slate-200" />
          <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
        </div>
      </td>
      <td className="p-3"><div className="h-4 w-20 animate-pulse rounded bg-slate-200" /></td>
      <td className="p-3"><div className="h-4 w-28 animate-pulse rounded bg-slate-200" /></td>
      <td className="p-3"><div className="h-8 w-24 animate-pulse rounded bg-slate-200" /></td>
    </tr>
  );
}

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    setIsAuth(true);
    fetchUsers();
  }, [router]);

  const fetchUsers = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`Status ${response.status}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setIsError(true);
      await Swal.fire({
        icon: "warning",
        title: "ไม่สามารถโหลดข้อมูลได้",
        confirmButtonColor: "#4f46e5",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ฟังก์ชันแก้ไขข้อมูลสมาชิกผ่าน Popup
  const handleEdit = async (user) => {
    const { value: formValues } = await Swal.fire({
      title: "แก้ไขข้อมูลสมาชิก",
      html: `
        <div style="text-align: left; display: flex; flex-direction: column; gap: 10px;">
          <label style="font-size: 12px; font-weight: 600;">ชื่อ</label>
          <input id="swal-input1" class="swal2-input" style="margin: 0;" value="${user.firstname || ""}">
          
          <label style="font-size: 12px; font-weight: 600;">นามสกุล</label>
          <input id="swal-input2" class="swal2-input" style="margin: 0;" value="${user.lastname || ""}">
          
          <label style="font-size: 12px; font-weight: 600;">Email / Username</label>
          <input id="swal-input3" class="swal2-input" style="margin: 0;" value="${user.username || ""}">
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "บันทึก",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#4f46e5",
      preConfirm: () => {
        return {
          firstname: document.getElementById("swal-input1").value,
          lastname: document.getElementById("swal-input2").value,
          username: document.getElementById("swal-input3").value,
        };
      },
    });

    if (formValues) {
      try {
        Swal.showLoading();
        const response = await fetch(`${API_URL}/${user.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValues),
        });

        if (!response.ok) throw new Error("แก้ไขข้อมูลไม่สำเร็จ");

        const updatedUser = await response.json();

        // อัปเดตข้อมูลใน State ทันทีโดยไม่ต้องรีโหลดหน้า
        setUsers((prev) =>
          prev.map((u) => (u.id === user.id ? { ...u, ...updatedUser } : u))
        );

        await Swal.fire({
          icon: "success",
          title: "บันทึกข้อมูลเรียบร้อย",
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (error) {
        await Swal.fire({
          icon: "error",
          title: "เกิดข้อผิดพลาด",
          text: error.message,
        });
      }
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      icon: "warning",
      title: "ยืนยันการลบ",
      text: "คุณต้องการลบสมาชิกคนนี้ใช่หรือไม่?",
      showCancelButton: true,
      confirmButtonText: "ลบ",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#94a3b8",
    });

    if (!result.isConfirmed) return;

    try {
      setDeletingId(id);

      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || `Status ${response.status}`);
      }

      setUsers((prev) => prev.filter((u) => u.id !== id));

      await Swal.fire({
        icon: "success",
        title: "ลบข้อมูลเรียบร้อยแล้ว",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "ลบข้อมูลไม่สำเร็จ",
        text: error.message,
      });
    } finally {
      setDeletingId(null);
    }
  };

  if (!isAuth) return null;

  if (isError) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-3xl">⚠️</div>
        <div>
          <p className="text-lg font-semibold text-slate-800">เกิดข้อผิดพลาดในการโหลดข้อมูล</p>
          <p className="mt-1 text-sm text-slate-500">ลองตรวจสอบการเชื่อมต่อแล้วลองใหม่อีกครั้ง</p>
        </div>
        <button
          onClick={fetchUsers}
          className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 active:scale-95"
        >
          ลองใหม่อีกครั้ง
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">รายชื่อสมาชิก</h1>
            <p className="text-sm text-slate-500">
              {isLoading ? "กำลังโหลดข้อมูล..." : `ทั้งหมด ${users.length} คน`}
            </p>
          </div>
        </div>

        {!isLoading && users.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-200 bg-white py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">🗂️</div>
            <p className="font-medium text-slate-700">ยังไม่มีข้อมูลสมาชิกในระบบ</p>
            <p className="text-sm text-slate-400">เพิ่มสมาชิกใหม่เพื่อเริ่มต้นใช้งาน</p>
          </div>
        )}

        {(isLoading || users.length > 0) && (
          <>
            <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:block">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th className="p-3">ลำดับ</th>
                    <th className="p-3">ชื่อ</th>
                    <th className="p-3">นามสกุล</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">จัดการ</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading
                    ? Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />)
                    : users.map((user, index) => (
                        <tr key={user.id} className="border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50">
                          <td className="p-3 text-center text-slate-500">{index + 1}</td>
                          <td className="p-3">
                            <div className="flex items-center gap-3">
                              <Avatar firstname={user.firstname} />
                              <span className="font-medium text-slate-800">{user.firstname}</span>
                            </div>
                          </td>
                          <td className="p-3 text-slate-700">{user.lastname}</td>
                          <td className="p-3 text-slate-500">{user.username}</td>
                          <td className="p-3">
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleEdit(user)}
                                className="rounded-lg bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-700 transition hover:bg-amber-200 active:scale-95"
                              >
                                แก้ไข
                              </button>
                              <button
                                onClick={() => handleDelete(user.id)}
                                disabled={deletingId === user.id}
                                className="rounded-lg bg-rose-100 px-3 py-1.5 text-xs font-medium text-rose-600 transition hover:bg-rose-200 active:scale-95 disabled:opacity-50"
                              >
                                {deletingId === user.id ? "กำลังลบ..." : "ลบ"}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-3 sm:hidden">
              {isLoading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 animate-pulse rounded-full bg-slate-200" />
                        <div className="flex-1 space-y-2">
                          <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />
                          <div className="h-3 w-20 animate-pulse rounded bg-slate-200" />
                        </div>
                      </div>
                    </div>
                  ))
                : users.map((user, index) => (
                    <div key={user.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <Avatar firstname={user.firstname} />
                          <div>
                            <p className="font-semibold text-slate-800">{user.firstname} {user.lastname}</p>
                            <p className="text-xs text-slate-400">@{user.username}</p>
                          </div>
                        </div>
                        <span className="mt-1 text-xs text-slate-300">#{index + 1}</span>
                      </div>
                      <div className="mt-3 flex gap-2 border-t border-slate-100 pt-3">
                        <button
                          onClick={() => handleEdit(user)}
                          className="flex-1 rounded-lg bg-amber-100 py-2 text-xs font-medium text-amber-700 transition active:scale-95"
                        >
                          แก้ไข
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          disabled={deletingId === user.id}
                          className="flex-1 rounded-lg bg-rose-100 py-2 text-xs font-medium text-rose-600 transition active:scale-95 disabled:opacity-50"
                        >
                          {deletingId === user.id ? "กำลังลบ..." : "ลบ"}
                        </button>
                      </div>
                    </div>
                  ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
} 
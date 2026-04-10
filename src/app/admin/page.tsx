"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface TrialRequest {
  id: string;
  parent_name: string;
  phone: string;
  child_name: string;
  child_age: string;
  preferred_day: string;
  experience: string;
  status: string;
  created_at: string;
}

const DAY_LABELS: Record<string, string> = {
  mon: "월요일",
  tue: "화요일",
  wed: "수요일",
  thu: "목요일",
  fri: "금요일",
  sat: "토요일",
};

const EXP_LABELS: Record<string, string> = {
  none: "없음",
  some: "조금 있음",
  experienced: "다른 학원 경험",
};

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  pending: { label: "대기", color: "bg-yellow-100 text-yellow-800" },
  contacted: { label: "연락완료", color: "bg-blue-100 text-blue-800" },
  confirmed: { label: "확정", color: "bg-green-100 text-green-800" },
  cancelled: { label: "취소", color: "bg-red-100 text-red-800" },
};

export default function AdminPage() {
  const [requests, setRequests] = useState<TrialRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const ADMIN_PASSWORD = "thands2024";

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "true") {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (!authenticated) return;

    async function fetchRequests() {
      const { data, error } = await supabase
        .from("trial_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setRequests(data);
      }
      setLoading(false);
    }

    fetchRequests();
  }, [authenticated]);

  async function updateStatus(id: string, status: string) {
    await supabase
      .from("trial_requests")
      .update({ status })
      .eq("id", id);

    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h1 className="text-xl font-bold mb-6 text-center">관리자 로그인</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            className="w-full px-4 py-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            autoFocus
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#7BA05B] text-white rounded-md font-medium hover:bg-[#628A45] transition-colors"
          >
            로그인
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-bold">
          🎨 생각하는 손 — 체험수업 신청 관리
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">
            총 {requests.length}건
          </span>
          <button
            onClick={() => {
              sessionStorage.removeItem("admin_auth");
              setAuthenticated(false);
            }}
            className="text-sm text-gray-400 hover:text-gray-600"
          >
            로그아웃
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {loading ? (
          <div className="text-center py-20 text-gray-400">불러오는 중...</div>
        ) : requests.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">아직 신청이 없습니다.</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium text-gray-500">신청일시</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-500">학부모</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-500">연락처</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-500">아이</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-500">나이/학년</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-500">희망요일</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-500">미술경험</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-500">상태</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {requests.map((req) => {
                    const statusInfo = STATUS_LABELS[req.status] || STATUS_LABELS.pending;
                    return (
                      <tr key={req.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                          {new Date(req.created_at).toLocaleDateString("ko-KR", {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                        <td className="px-4 py-3 font-medium">{req.parent_name}</td>
                        <td className="px-4 py-3">
                          <a href={`tel:${req.phone}`} className="text-blue-600 hover:underline">
                            {req.phone}
                          </a>
                        </td>
                        <td className="px-4 py-3">{req.child_name}</td>
                        <td className="px-4 py-3">{req.child_age}</td>
                        <td className="px-4 py-3">{DAY_LABELS[req.preferred_day] || req.preferred_day}</td>
                        <td className="px-4 py-3">{EXP_LABELS[req.experience] || req.experience}</td>
                        <td className="px-4 py-3">
                          <select
                            value={req.status}
                            onChange={(e) => updateStatus(req.id, e.target.value)}
                            className={`text-xs px-2 py-1 rounded-full font-medium border-0 cursor-pointer ${statusInfo.color}`}
                          >
                            <option value="pending">대기</option>
                            <option value="contacted">연락완료</option>
                            <option value="confirmed">확정</option>
                            <option value="cancelled">취소</option>
                          </select>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

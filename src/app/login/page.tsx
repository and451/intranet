"use client";

import { Suspense } from "react";
import { signIn } from "next-auth/react";
import { Rocket, Shield, Globe, Info } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// useSearchParams exige um limite de Suspense para o prerender do build
export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <div className="min-h-full flex items-center justify-center bg-[#f0f0eb] p-6">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1a1a1a] tracking-tight">INTRAEB</h1>
              <p className="text-xs text-[#737373] uppercase tracking-wider">Agência Espacial Brasileira</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-[#e5e5e0] shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#1a1a1a]">Acesso à Intranet</h2>
            <p className="text-sm text-[#737373] mt-1">Autentique-se com sua conta Microsoft corporativa</p>
          </div>

          <button
            onClick={() => signIn("microsoft-entra-id", { callbackUrl })}
            className="w-full py-3 bg-gradient-to-r from-[#1e3a5f] to-[#2d4a73] text-white font-semibold rounded-xl hover:shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 21 21" fill="currentColor">
              <path d="M1 1h9v9H1z" />
              <path d="M11 1h9v9h-9z" />
              <path d="M1 11h9v9H1z" />
              <path d="M11 11h9v9h-9z" />
            </svg>
            Entrar com Microsoft
          </button>

          <div className="mt-6 pt-5 border-t border-[#e5e5e0]">
            <div className="flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <p className="text-[11px] text-[#737373] leading-relaxed">
                Autenticação via <strong>Microsoft Entra ID</strong> (SSO). O acesso é restrito a servidores e colaboradores da AEB. Problemas de acesso? Contate a <a href="#" className="text-[#1e3a5f] hover:underline">CGTI</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <a href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-3 bg-white rounded-2xl border border-[#e5e5e0] hover:shadow-md transition">
            <div className="w-8 h-8 bg-purple-50 rounded-xl flex items-center justify-center">
              <Globe className="w-4 h-4 text-purple-600" />
            </div>
            <span className="text-[10px] font-medium text-[#1a1a1a]">Teams</span>
          </a>
          <a href="https://outlook.office365.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-3 bg-white rounded-2xl border border-[#e5e5e0] hover:shadow-md transition">
            <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center">
              <Globe className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-[10px] font-medium text-[#1a1a1a]">Outlook</span>
          </a>
          <Link href="/contato" className="flex flex-col items-center gap-2 p-3 bg-white rounded-2xl border border-[#e5e5e0] hover:shadow-md transition">
            <div className="w-8 h-8 bg-amber-50 rounded-xl flex items-center justify-center">
              <Info className="w-4 h-4 text-amber-600" />
            </div>
            <span className="text-[10px] font-medium text-[#1a1a1a]">Suporte</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

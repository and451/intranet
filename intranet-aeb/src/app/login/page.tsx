"use client";

import { useState } from "react";
import { Rocket, Eye, EyeOff, Shield, Globe, Info } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui será integrado com o servidor LDAP
    // POST /api/auth/ldap { usuario, senha }
    alert("Autenticação LDAP em desenvolvimento. Redirecionando para a intranet...");
    window.location.href = "/";
  };

  return (
    <div className="min-h-full flex items-center justify-center bg-[#f0f0eb] p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
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

        {/* Card de login */}
        <div className="bg-white rounded-3xl p-8 border border-[#e5e5e0] shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#1a1a1a]">Acesso à Intranet</h2>
            <p className="text-sm text-[#737373] mt-1">Use suas credenciais corporativas para entrar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="usuario" className="block text-xs font-semibold text-[#737373] uppercase tracking-wider mb-1.5">
                Matrícula / Usuário
              </label>
              <input
                id="usuario"
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Ex: anderson.malta"
                className="w-full px-4 py-3 bg-[#f8f8f5] border border-[#e5e5e0] rounded-xl text-sm text-[#1a1a1a] placeholder:text-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
                required
              />
            </div>

            <div>
              <label htmlFor="senha" className="block text-xs font-semibold text-[#737373] uppercase tracking-wider mb-1.5">
                Senha
              </label>
              <div className="relative">
                <input
                  id="senha"
                  type={mostrarSenha ? "text" : "password"}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-[#f8f8f5] border border-[#e5e5e0] rounded-xl text-sm text-[#1a1a1a] placeholder:text-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1a1a1a] transition"
                >
                  {mostrarSenha ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={lembrar}
                  onChange={(e) => setLembrar(e.target.checked)}
                  className="w-4 h-4 rounded border-[#e5e5e0] text-blue-600 focus:ring-blue-500"
                />
                <span className="text-xs text-[#737373]">Lembrar-me</span>
              </label>
              <a href="#" className="text-xs font-medium text-[#1e3a5f] hover:underline">
                Esqueci a senha
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#1e3a5f] to-[#2d4a73] text-white font-semibold rounded-xl hover:shadow-lg hover:opacity-95 transition"
            >
              Entrar
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-[#e5e5e0]">
            <div className="flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <p className="text-[11px] text-[#737373] leading-relaxed">
                Autenticação via <strong>LDAP corporativo</strong>. O acesso é restrito a servidores e colaboradores da AEB. Problemas de acesso? Contate a <a href="#" className="text-[#1e3a5f] hover:underline">CGTI</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Links rápidos */}
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

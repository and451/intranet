"use client";

import {
  MessageSquare,
  Video,
  Mail,
  CalendarDays,
  ArrowUpRight,
  Bell,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const teamsMensagens = [
  { id: 1, origem: "DGEP — Projetos", preview: "Anderson, favor revisar o documento de escopo do projeto CLA...", hora: "10:30", naoLidas: 3 },
  { id: 2, origem: "DIEN — Inovação", preview: "Lembrando da reunião de alinhamento às 15h na sala 302.", hora: "09:15", naoLidas: 1 },
  { id: 3, origem: "AEB Escola", preview: "Inscrições abertas para o Workshop de CubeSats. Garanta sua vaga!", hora: "Ontem", naoLidas: 0 },
];

const outlookEmails = [
  { id: 1, remetente: "sec.dgep@aeb.gov.br", assunto: "Pauta da reunião de planejamento Q3", hora: "11:45", urgente: true },
  { id: 2, remetente: "comunicacao@aeb.gov.br", assunto: "Boletim Interno Suplementar Nº 65/2025", hora: "08:20", urgente: false },
  { id: 3, remetente: "aeb.escola@aeb.gov.br", assunto: "Certificado de conclusão — Curso de Astronáutica", hora: "Ontem", urgente: false },
];

const proximasReunioes = [
  { id: 1, titulo: "Reunião DGEP — Projetos Espaciais", hora: "14:00", duracao: "1h", plataforma: "Teams", participantes: ["AM", "JV", "LC"] },
  { id: 2, titulo: "Reunião DIEN — Inovação", hora: "15:30", duracao: "45min", plataforma: "Teams", participantes: ["AM", "FR"] },
];

export default function TeamsOutlookPanel() {
  return (
    <div className="space-y-6">
      {/* Card Teams */}
      <div className="bg-white rounded-3xl p-6 border border-[#e5e5e0]">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-purple-50 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1a1a1a]">Microsoft Teams</h3>
              <p className="text-[10px] text-[#737373]">4 mensagens não lidas</p>
            </div>
          </div>
          <a href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#f0f0eb] rounded-xl flex items-center justify-center hover:bg-purple-100 transition">
            <ArrowUpRight className="w-4 h-4 text-[#737373]" />
          </a>
        </div>
        <div className="space-y-2">
          {teamsMensagens.map((m) => (
            <div key={m.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#f8f8f5] transition cursor-pointer group">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-purple-700">
                {m.origem.split(" ")[0].substring(0, 2).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-[#1a1a1a]">{m.origem}</p>
                  <span className="text-[10px] text-[#737373]">{m.hora}</span>
                </div>
                <p className="text-[11px] text-[#737373] truncate">{m.preview}</p>
              </div>
              {m.naoLidas > 0 && (
                <span className="w-5 h-5 bg-purple-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center flex-shrink-0">
                  {m.naoLidas}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Card Outlook */}
      <div className="bg-white rounded-3xl p-6 border border-[#e5e5e0]">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center">
              <Mail className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1a1a1a]">Outlook</h3>
              <p className="text-[10px] text-[#737373]">3 emails não lidos</p>
            </div>
          </div>
          <a href="https://outlook.office365.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#f0f0eb] rounded-xl flex items-center justify-center hover:bg-blue-100 transition">
            <ArrowUpRight className="w-4 h-4 text-[#737373]" />
          </a>
        </div>
        <div className="space-y-2">
          {outlookEmails.map((e) => (
            <div key={e.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#f8f8f5] transition cursor-pointer group">
              <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0">
                {e.urgente ? <AlertCircle className="w-4 h-4 text-red-500 -ml-1" /> : <CheckCircle2 className="w-4 h-4 text-gray-300 -ml-1" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-[#1a1a1a]">{e.remetente}</p>
                  <span className="text-[10px] text-[#737373]">{e.hora}</span>
                </div>
                <p className="text-[11px] text-[#737373] truncate">{e.assunto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Próximas reuniões */}
      <div className="bg-white rounded-3xl p-6 border border-[#e5e5e0]">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center">
              <Video className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1a1a1a]">Próximas Reuniões</h3>
              <p className="text-[10px] text-[#737373]">Hoje, 29 de maio</p>
            </div>
          </div>
          <a href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-[#737373] hover:text-[#1a1a1a] flex items-center gap-1 transition">
            Agenda <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
        <div className="space-y-3">
          {proximasReunioes.map((r) => (
            <div key={r.id} className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f8f5] transition">
              <div className="w-12 h-12 bg-white rounded-2xl flex flex-col items-center justify-center flex-shrink-0 border border-[#e5e5e0]">
                <span className="text-[10px] font-bold text-[#737373]">{r.hora}</span>
                <span className="text-[9px] text-[#737373]">{r.duracao}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#1a1a1a] line-clamp-1">{r.titulo}</p>
                <p className="text-[10px] text-[#737373] mb-1">{r.plataforma}</p>
                <div className="flex -space-x-1.5">
                  {r.participantes.map((p, i) => (
                    <div key={i} className="w-5 h-5 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-[8px] font-bold text-white border border-white">
                      {p}
                    </div>
                  ))}
                </div>
              </div>
              <a href="#" className="text-[10px] font-medium bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-lg transition">
                Entrar
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

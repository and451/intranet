"use client";

import {
  MessageSquare,
  Video,
  Mail,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useGraphData } from "@/hooks/useGraphData";

interface GraphMessage {
  subject: string;
  sender: { emailAddress: { name: string; address: string } };
  receivedDateTime: string;
  bodyPreview: string;
  isRead: boolean;
}

interface GraphEvent {
  subject: string;
  start: { dateTime: string };
  end: { dateTime: string };
  location?: { displayName?: string };
  onlineMeeting?: { joinUrl?: string };
}

interface GraphChatMessage {
  from?: { user?: { displayName?: string } };
  body?: { content?: string };
  createdDateTime?: string;
}

export default function TeamsOutlookPanel() {
  const {
    data: emailData,
    loading: emailLoading,
    error: emailError,
  } = useGraphData<{ value: GraphMessage[] }>({ endpoint: "emails" });

  const {
    data: calendarData,
    loading: calendarLoading,
    error: calendarError,
  } = useGraphData<{ value: GraphEvent[] }>({ endpoint: "calendar" });

  const {
    data: teamsData,
    loading: teamsLoading,
    error: teamsError,
  } = useGraphData<{ mensagens: GraphChatMessage[] }>({ endpoint: "teams" });

  const emails = emailData?.value || [];
  const eventos = calendarData?.value || [];
  const mensagens = teamsData?.mensagens || [];

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
              <p className="text-[10px] text-[#737373]">{mensagens.length} mensagens recentes</p>
            </div>
          </div>
          <a href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#f0f0eb] rounded-xl flex items-center justify-center hover:bg-purple-100 transition">
            <ArrowUpRight className="w-4 h-4 text-[#737373]" />
          </a>
        </div>
        {teamsLoading && <p className="text-xs text-[#737373]">Carregando...</p>}
        {teamsError && <p className="text-xs text-red-500">{teamsError}</p>}
        <div className="space-y-2">
          {mensagens.slice(0, 3).map((m, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#f8f8f5] transition cursor-pointer group">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-purple-700">
                {(m.from?.user?.displayName || "MS").substring(0, 2).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-[#1a1a1a]">{m.from?.user?.displayName || "Teams"}</p>
                  <span className="text-[10px] text-[#737373]">{m.createdDateTime ? new Date(m.createdDateTime).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) : ""}</span>
                </div>
                <p className="text-[11px] text-[#737373] truncate">{(m.body?.content || "").replace(/<[^>]+>/g, "").substring(0, 60)}</p>
              </div>
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
              <p className="text-[10px] text-[#737373]">{emails.length} e-mails não lidos</p>
            </div>
          </div>
          <a href="https://outlook.office365.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#f0f0eb] rounded-xl flex items-center justify-center hover:bg-blue-100 transition">
            <ArrowUpRight className="w-4 h-4 text-[#737373]" />
          </a>
        </div>
        {emailLoading && <p className="text-xs text-[#737373]">Carregando...</p>}
        {emailError && <p className="text-xs text-red-500">{emailError}</p>}
        <div className="space-y-2">
          {emails.slice(0, 3).map((e) => (
            <div key={e.receivedDateTime + e.subject} className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#f8f8f5] transition cursor-pointer group">
              <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0">
                {!e.isRead ? <AlertCircle className="w-4 h-4 text-red-500 -ml-1" /> : <CheckCircle2 className="w-4 h-4 text-gray-300 -ml-1" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-[#1a1a1a]">{e.sender?.emailAddress?.name || e.sender?.emailAddress?.address}</p>
                  <span className="text-[10px] text-[#737373]">{new Date(e.receivedDateTime).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}</span>
                </div>
                <p className="text-[11px] text-[#737373] truncate">{e.subject}</p>
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
              <p className="text-[10px] text-[#737373]">Hoje</p>
            </div>
          </div>
          <a href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-[#737373] hover:text-[#1a1a1a] flex items-center gap-1 transition">
            Agenda <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
        {calendarLoading && <p className="text-xs text-[#737373]">Carregando...</p>}
        {calendarError && <p className="text-xs text-red-500">{calendarError}</p>}
        <div className="space-y-3">
          {eventos.slice(0, 3).map((e) => (
            <div key={e.subject + e.start.dateTime} className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f8f5] transition">
              <div className="w-12 h-12 bg-white rounded-2xl flex flex-col items-center justify-center flex-shrink-0 border border-[#e5e5e0]">
                <span className="text-[10px] font-bold text-[#737373]">{new Date(e.start.dateTime).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}</span>
                <span className="text-[9px] text-[#737373]">{Math.round((new Date(e.end.dateTime).getTime() - new Date(e.start.dateTime).getTime()) / 60000)}min</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#1a1a1a] line-clamp-1">{e.subject}</p>
                <p className="text-[10px] text-[#737373] mb-1">{e.location?.displayName || "Teams"}</p>
              </div>
              {e.onlineMeeting?.joinUrl && (
                <a href={e.onlineMeeting.joinUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-medium bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-lg transition">
                  Entrar
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

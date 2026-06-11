"use client";

import { useGraphData } from "@/hooks/useGraphData";
import { AtSign, MessageSquare, Clock } from "lucide-react";

interface GraphMessage {
  subject: string;
  sender: { emailAddress: { name: string; address: string } };
  receivedDateTime: string;
}

interface GraphChatMessage {
  from?: { user?: { displayName?: string } };
  body?: { content?: string };
  createdDateTime?: string;
}

interface GraphEvent {
  subject: string;
  start: { dateTime: string };
  end: { dateTime: string };
  location?: { displayName?: string };
}

export default function DashboardViva() {
  const { data: emailData, loading: emailLoading } = useGraphData<{ value: GraphMessage[] }>({ endpoint: "emails" });
  const { data: teamsData, loading: teamsLoading } = useGraphData<{ mensagens: GraphChatMessage[] }>({ endpoint: "teams" });
  const { data: calendarData, loading: calendarLoading } = useGraphData<{ value: GraphEvent[] }>({ endpoint: "calendar" });

  const emails = emailData?.value?.slice(0, 2) || [];
  const mensagens = teamsData?.mensagens?.slice(0, 2) || [];
  const eventos = calendarData?.value?.slice(0, 2) || [];

  const cards = [
    {
      icone: AtSign,
      cor: "#0F6CBD",
      titulo: "Seus e-mails",
      count: emailLoading ? "..." : `${emailData?.value?.length || 0} nao lidos`,
      itens: emails.map((e) => ({
        titulo: e.subject,
        meta: `${e.sender?.emailAddress?.name || e.sender?.emailAddress?.address} · ${new Date(e.receivedDateTime).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}`,
      })),
      link: "Abrir no Outlook",
      href: "https://outlook.office365.com",
    },
    {
      icone: MessageSquare,
      cor: "#6264A7",
      titulo: "Mencoes no Teams",
      count: teamsLoading ? "..." : `${mensagens.length} novas`,
      itens: mensagens.map((m) => ({
        titulo: m.from?.user?.displayName ? `${m.from.user.displayName}` : "Nova mensagem",
        meta: m.createdDateTime ? new Date(m.createdDateTime).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) : "",
      })),
      link: "Abrir no Teams",
      href: "https://teams.microsoft.com",
    },
    {
      icone: Clock,
      cor: "#0F7B0F",
      titulo: "Agenda de hoje",
      count: calendarLoading ? "..." : `${eventos.length} compromissos`,
      itens: eventos.map((e) => ({
        titulo: `${new Date(e.start.dateTime).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })} — ${e.subject}`,
        meta: e.location?.displayName || "Teams" + (e.end.dateTime ? ` · ${Math.round((new Date(e.end.dateTime).getTime() - new Date(e.start.dateTime).getTime()) / 60000)}min` : ""),
      })),
      link: "Ver calendario completo",
      href: "https://teams.microsoft.com",
    },
  ];

  return (
    <section>
      <div className="flex items-baseline justify-between mb-3.5">
        <h2 className="text-xl font-semibold text-[#242424]">Seu dia</h2>
        <span className="text-xs font-semibold text-[#0B4DA2] cursor-pointer hover:underline">Personalizar</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card) => (
          <div key={card.titulo} className="bg-white rounded-lg shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] p-4 flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md flex items-center justify-center text-white text-xs font-bold" style={{ background: card.cor }}>
                <card.icone className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#242424]">{card.titulo}</h3>
                <span className="text-[11.5px] text-[#616161]">{card.count}</span>
              </div>
            </div>
            {card.itens.map((item, i) => (
              <div key={i} className="border-t border-[#F5F5F5] pt-2">
                <p className="text-xs font-semibold text-[#242424] leading-snug">{item.titulo}</p>
                <span className="text-[11.5px] text-[#616161]">{item.meta}</span>
              </div>
            ))}
            <a href={card.href} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#0B4DA2] mt-auto hover:underline">
              {card.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

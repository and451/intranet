"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, X, ExternalLink } from "lucide-react";

// Salas reais da AEB, conforme o sistema de reservas da intranet Vindula
// (aeb.vindula.net/reservacorporativa/reserva-de-salas). Capacidades estimadas.
const SALAS = [
  { id: "reuniao-2", nome: "Sala de Reunião", andar: "2º andar", lugares: 10 },
  { id: "cinema", nome: "Cinema", andar: "Térreo", lugares: 40 },
  { id: "auditorio", nome: "Auditório", andar: "Térreo", lugares: 80 },
];

const VINDULA_RESERVAS = "https://aeb.vindula.net/reservacorporativa/reserva-de-salas/calendario/buscar/";
const RESERVAS_KEY = "intraeb-reservas-v1";
const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

const pad2 = (n: number) => String(n).padStart(2, "0");
const emMinutos = (h: string) => parseInt(h.slice(0, 2), 10) * 60 + parseInt(h.slice(3), 10);
const gerarHorarios = (de: number, ate: number) => {
  const out: string[] = [];
  for (let m = de; m <= ate; m += 30) out.push(`${pad2(Math.floor(m / 60))}:${pad2(m % 60)}`);
  return out;
};
const HORA_INICIO = gerarHorarios(8 * 60, 17 * 60 + 30);
const HORA_FIM = gerarHorarios(8 * 60 + 30, 18 * 60);

interface Reserva {
  id: string;
  sala: string;
  dia: number;
  mes: number;
  ano: number;
  inicio: string;
  fim: string;
  pessoas: number | null;
  coffee: boolean;
  tic: boolean;
}

interface FormReserva {
  dia: number;
  mes: number;
  ano: number;
  inicio: string;
  fim: string;
  pessoas: string;
  coffee: boolean;
  tic: boolean;
}

const formInicial = (): FormReserva => {
  const hoje = new Date();
  return {
    dia: hoje.getDate(),
    mes: hoje.getMonth() + 1,
    ano: hoje.getFullYear(),
    inicio: "09:00",
    fim: "10:00",
    pessoas: "",
    coffee: false,
    tic: false,
  };
};

export default function ReservaSala() {
  const [minhas, setMinhas] = useState<Reserva[]>([]);
  const [carregado, setCarregado] = useState(false);
  const [pickerAberto, setPickerAberto] = useState<string | null>(null);
  const [form, setForm] = useState<FormReserva>(formInicial);

  useEffect(() => {
    try {
      const salvas = JSON.parse(localStorage.getItem(RESERVAS_KEY) ?? "[]");
      if (Array.isArray(salvas)) setMinhas(salvas);
    } catch {}
    setCarregado(true);
  }, []);

  useEffect(() => {
    if (carregado) localStorage.setItem(RESERVAS_KEY, JSON.stringify(minhas));
  }, [minhas, carregado]);

  const setCampo = <K extends keyof FormReserva>(campo: K, valor: FormReserva[K]) =>
    setForm((f) => {
      const novo = { ...f, [campo]: valor };
      const maxDia = new Date(novo.ano, novo.mes, 0).getDate();
      if (novo.dia > maxDia) novo.dia = maxDia;
      if (emMinutos(novo.fim) <= emMinutos(novo.inicio)) {
        novo.fim = HORA_FIM.find((h) => emMinutos(h) > emMinutos(novo.inicio)) ?? HORA_FIM[HORA_FIM.length - 1];
      }
      return novo;
    });

  const abrirPicker = (salaId: string) => {
    setPickerAberto(pickerAberto === salaId ? null : salaId);
    setForm(formInicial());
  };

  const confirmar = (sala: (typeof SALAS)[number]) => {
    setMinhas((prev) => [
      ...prev,
      {
        id: `${sala.id}-${Date.now()}`,
        sala: `${sala.nome} — ${sala.andar}`,
        dia: form.dia,
        mes: form.mes,
        ano: form.ano,
        inicio: form.inicio,
        fim: form.fim,
        pessoas: form.pessoas ? Number(form.pessoas) : null,
        coffee: form.coffee,
        tic: form.tic,
      },
    ]);
    setPickerAberto(null);
  };

  const cancelar = (id: string) => setMinhas((prev) => prev.filter((r) => r.id !== id));

  const hoje = new Date();
  const ehHoje = (r: Reserva) =>
    r.dia === hoje.getDate() && r.mes === hoje.getMonth() + 1 && r.ano === hoje.getFullYear();
  const ordem = (r: Reserva) => ((r.ano * 100 + r.mes) * 100 + r.dia) * 10000 + emMinutos(r.inicio);
  const reservas = [...minhas].sort((a, b) => ordem(a) - ordem(b));

  const diasDoMes = new Date(form.ano, form.mes, 0).getDate();
  const salaAtual = pickerAberto ? SALAS.find((s) => s.id === pickerAberto) : null;
  const acimaCapacidade = salaAtual && form.pessoas && Number(form.pessoas) > salaAtual.lugares;

  return (
    <div className="bg-white rounded-3xl p-5 border border-[#e5e5e0]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-[#1a1a1a]">Reserva de Salas</h3>
        <CalendarCheck className="w-4 h-4 text-[#737373]" />
      </div>

      <p className="text-[10px] font-semibold text-[#737373] uppercase tracking-wider mb-2">Suas reservas</p>
      {reservas.length === 0 ? (
        <p className="text-xs text-[#737373] mb-3">Você ainda não tem reservas.</p>
      ) : (
        <div className="space-y-2 mb-3">
          {reservas.map((r) => (
            <div key={r.id} className="flex items-start gap-2.5 p-2 rounded-xl bg-[#f8f8f5]">
              <div className="flex flex-col items-center flex-shrink-0 w-12">
                <span className="text-[9px] font-bold text-[#1e3a5f] uppercase">
                  {ehHoje(r) ? "hoje" : `${pad2(r.dia)}/${pad2(r.mes)}`}
                </span>
                <span className="text-xs font-bold text-[#1a1a1a]">{r.inicio}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#1a1a1a] leading-tight">{r.sala}</p>
                <p className="text-[10px] text-[#737373]">
                  até {r.fim}
                  {r.pessoas ? ` · ${r.pessoas} pessoas` : ""}
                </p>
                {(r.coffee || r.tic) && (
                  <p className="flex gap-1 mt-1 flex-wrap">
                    {r.coffee && <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-700">Coffee break</span>}
                    {r.tic && <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-700">Suporte TIC</span>}
                  </p>
                )}
              </div>
              <button
                onClick={() => cancelar(r.id)}
                title="Cancelar reserva"
                className="text-[#737373] hover:text-red-500 transition flex-shrink-0"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}

      <p className="text-[10px] font-semibold text-[#737373] uppercase tracking-wider mb-2">Salas — Sede</p>
      <div className="space-y-2">
        {SALAS.map((s) => (
          <div key={s.id}>
            <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#f8f8f5] transition">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#1a1a1a]">
                  {s.nome} <em className="not-italic font-normal text-[#737373]">· {s.andar}</em>
                </p>
                <p className="text-[10px] text-[#737373]">{s.lugares} lugares</p>
              </div>
              <button
                onClick={() => abrirPicker(s.id)}
                className={`text-[11px] font-semibold px-3 py-1.5 rounded-lg border transition flex-shrink-0 ${
                  pickerAberto === s.id
                    ? "bg-[#1e3a5f] border-[#1e3a5f] text-white"
                    : "border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f]/5"
                }`}
              >
                Reservar
              </button>
            </div>

            {pickerAberto === s.id && (
              <div className="mt-1 p-3 rounded-xl border border-[#e5e5e0] bg-[#fcfcfa] space-y-2.5">
                <div className="grid grid-cols-3 gap-2">
                  <label className="flex flex-col gap-1">
                    <span className="text-[9px] font-semibold text-[#737373] uppercase">Dia</span>
                    <select
                      value={form.dia}
                      onChange={(e) => setCampo("dia", Number(e.target.value))}
                      className="text-xs border border-[#e5e5e0] rounded-lg px-1.5 py-1.5 bg-white"
                    >
                      {Array.from({ length: diasDoMes }, (_, i) => i + 1).map((d) => (
                        <option key={d} value={d}>{pad2(d)}</option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-[9px] font-semibold text-[#737373] uppercase">Mês</span>
                    <select
                      value={form.mes}
                      onChange={(e) => setCampo("mes", Number(e.target.value))}
                      className="text-xs border border-[#e5e5e0] rounded-lg px-1.5 py-1.5 bg-white"
                    >
                      {MESES.map((m, i) => (
                        <option key={m} value={i + 1}>{m}</option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-[9px] font-semibold text-[#737373] uppercase">Ano</span>
                    <select
                      value={form.ano}
                      onChange={(e) => setCampo("ano", Number(e.target.value))}
                      className="text-xs border border-[#e5e5e0] rounded-lg px-1.5 py-1.5 bg-white"
                    >
                      {[hoje.getFullYear(), hoje.getFullYear() + 1].map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <label className="flex flex-col gap-1">
                    <span className="text-[9px] font-semibold text-[#737373] uppercase">Início</span>
                    <select
                      value={form.inicio}
                      onChange={(e) => setCampo("inicio", e.target.value)}
                      className="text-xs border border-[#e5e5e0] rounded-lg px-1.5 py-1.5 bg-white"
                    >
                      {HORA_INICIO.map((h) => (
                        <option key={h} value={h}>{h}</option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-[9px] font-semibold text-[#737373] uppercase">Encerramento</span>
                    <select
                      value={form.fim}
                      onChange={(e) => setCampo("fim", e.target.value)}
                      className="text-xs border border-[#e5e5e0] rounded-lg px-1.5 py-1.5 bg-white"
                    >
                      {HORA_FIM.filter((h) => emMinutos(h) > emMinutos(form.inicio)).map((h) => (
                        <option key={h} value={h}>{h}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-1">
                  <span className="text-[9px] font-semibold text-[#737373] uppercase">Nº de pessoas</span>
                  <input
                    type="number"
                    min={1}
                    max={200}
                    placeholder={`Capacidade: ${s.lugares}`}
                    value={form.pessoas}
                    onChange={(e) => setCampo("pessoas", e.target.value)}
                    className="text-xs border border-[#e5e5e0] rounded-lg px-2 py-1.5 bg-white"
                  />
                </label>
                {acimaCapacidade && (
                  <p className="text-[10px] text-red-600">Acima da capacidade da sala ({salaAtual!.lugares} lugares).</p>
                )}

                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-[11px] text-[#1a1a1a]">
                    <input
                      type="checkbox"
                      checked={form.coffee}
                      onChange={(e) => setCampo("coffee", e.target.checked)}
                      className="accent-[#1e3a5f]"
                    />
                    Necessita de coffee break
                  </label>
                  <label className="flex items-center gap-2 text-[11px] text-[#1a1a1a]">
                    <input
                      type="checkbox"
                      checked={form.tic}
                      onChange={(e) => setCampo("tic", e.target.checked)}
                      className="accent-[#1e3a5f]"
                    />
                    Necessita de suporte de TIC
                  </label>
                </div>

                <button
                  onClick={() => confirmar(s)}
                  className="w-full bg-[#1e3a5f] hover:bg-[#2d4a73] text-white text-xs font-semibold py-2 rounded-xl transition"
                >
                  Confirmar reserva
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <a
        href={VINDULA_RESERVAS}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#0B4DA2] hover:underline mt-3"
      >
        Calendário completo de reservas <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  );
}

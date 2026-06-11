import Link from "next/link";

// Sistemas do acesso rápido da intranet antiga (INTRAEB), com os ícones originais.
const sistemas = [
  { nome: "SEI", icone: "/images/sistemas/sei.png", url: "https://sei.aeb.gov.br/" },
  { nome: "Ponto", icone: "/images/sistemas/ponto.png", url: "https://admin.oitchau.com.br/login" },
  { nome: "Webmail", icone: "/images/sistemas/webmail.png", url: "https://outlook.office.com/" },
  { nome: "PGD", icone: "/images/sistemas/pgd.png", url: "https://intranet-old.aeb.gov.br/pgd/" },
  { nome: "Nuvem", icone: "/images/sistemas/nuvem.png", url: "https://nuvem.aeb.gov.br/index.php" },
  { nome: "Suporte TI", icone: "/images/sistemas/suporte.png", url: "https://citsmart.aeb.gov.br/" },
  { nome: "Reserva de Salas", icone: "/images/sistemas/reserva-salas.png", url: "https://minhaagendavirtual.com.br/aeb-salas" },
  { nome: "Painéis", icone: "/images/sistemas/paineis.png", url: "https://paineis.aeb.gov.br/paineis/browse/" },
];

export default function QuickLinks() {
  return (
    <section>
      <div className="flex items-baseline justify-between mb-3.5">
        <h2 className="text-xl font-semibold text-[#242424]">Sistemas e ferramentas</h2>
        <Link href="/sistemas" className="text-xs font-semibold text-[#0B4DA2] hover:underline">
          Todos os sistemas
        </Link>
      </div>
      <div className="grid grid-cols-8 gap-2.5">
        {sistemas.map((s) => (
          <a
            key={s.nome}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] p-4 flex flex-col items-center gap-1.5 transition-transform hover:-translate-y-0.5"
          >
            <img src={s.icone} alt="" className="w-9 h-9 object-contain" />
            <span className="text-xs font-semibold text-[#242424] text-center leading-tight">{s.nome}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

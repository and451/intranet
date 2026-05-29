import { MapPin, Phone, Globe, Mail } from "lucide-react";

const infos = [
  { icon: MapPin, label: "Endereço", valor: "Setor Policial — SPO, Área 5, Quadra 3, Bloco A\nBrasília/DF — CEP 70610-200" },
  { icon: Phone, label: "Telefone", valor: "(61) 2028-7000" },
  { icon: Globe, label: "Site", valor: "www.gov.br/aeb", href: "https://www.gov.br/aeb" },
  { icon: Mail, label: "Correspondência", valor: "Agência Espacial Brasileira — AEB" },
];

export default function ContatoPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-6">Contato</h1>
      <div className="grid gap-3 max-w-2xl">
        {infos.map((info) => {
          const Icon = info.icon;
          return (
            <div key={info.label} className="bg-white rounded-3xl p-5 border border-[#e5e5e0] flex items-start gap-4">
              <div className="w-12 h-12 bg-[#f0f0eb] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-[#737373]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#737373] uppercase tracking-wider mb-1">{info.label}</p>
                {info.href ? (
                  <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#1e3a5f] hover:underline">
                    {info.valor}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-[#1a1a1a] whitespace-pre-line">{info.valor}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

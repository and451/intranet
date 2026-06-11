"use client";

export default function GovBar() {
  return (
    <div className="bg-[#1351B4] text-white text-[11px]">
      <div className="max-w-[1204px] mx-auto px-6 py-1 flex items-center gap-4">
        <strong className="text-[11px]">gov.br</strong>
        <nav aria-label="Barra do governo" className="flex gap-4">
          <a href="https://www.gov.br/pt-br/orgaos-do-governo" target="_blank" rel="noopener noreferrer" className="hover:underline opacity-90">Orgaos do Governo</a>
          <a href="https://www.gov.br/acessoainformacao/pt-br" target="_blank" rel="noopener noreferrer" className="hover:underline opacity-90">Acesso a Informacao</a>
          <a href="https://www4.planalto.gov.br/legislacao" target="_blank" rel="noopener noreferrer" className="hover:underline opacity-90">Legislacao</a>
          <a href="#" className="hover:underline opacity-90">Acessibilidade</a>
        </nav>
      </div>
    </div>
  );
}

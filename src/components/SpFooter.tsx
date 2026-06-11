"use client";

export default function SpFooter() {
  return (
    <footer className="bg-[#071D41] text-white/80 mt-2">
      <div className="max-w-[1204px] mx-auto px-6 py-5 text-xs flex flex-col gap-3">
        <div className="flex gap-6 flex-wrap">
          <span><strong className="text-white">AEB</strong> · Agencia Espacial Brasileira</span>
          <span>Intranet corporativa — INTRAEB Next.js</span>
        </div>
        <div className="flex gap-6 flex-wrap text-white/60">
          <span>Administrador: CTI</span>
          <a href="mailto:adm_intranet@aeb.gov.br" className="hover:text-white hover:underline">adm_intranet@aeb.gov.br</a>
          <a href="https://www.facebook.com/agenciaespacialbrasileira" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">Facebook AEB</a>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold text-xl">
            AEB
          </div>
          <div>
            <h1 className="text-xl font-bold">INTRAEB</h1>
            <p className="text-xs text-blue-200">Intranet da Agência Espacial Brasileira</p>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-blue-200 transition">Início</Link>
          <Link href="/noticias" className="hover:text-blue-200 transition">Notícias</Link>
          <Link href="/boletins" className="hover:text-blue-200 transition">Boletins</Link>
          <Link href="/diretorias" className="hover:text-blue-200 transition">Diretorias</Link>
          <Link href="/aeb-escola" className="hover:text-blue-200 transition">AEB Escola</Link>
          <Link href="/contato" className="hover:text-blue-200 transition">Contato</Link>
        </nav>
      </div>
    </header>
  );
}

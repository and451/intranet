"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Newspaper,
  FileText,
  Building2,
  GraduationCap,
  Mail,
  Rocket,
  Globe,
  Users
} from 'lucide-react';
import AgendaSidebar from './AgendaSidebar';

const links = [
  { href: '/', label: 'Início', icon: LayoutDashboard },
  { href: '/noticias', label: 'Notícias', icon: Newspaper },
  { href: '/boletins', label: 'Boletins', icon: FileText },
  { href: '/diretorias', label: 'Diretorias', icon: Building2 },
  { href: '/aeb-escola', label: 'AEB Escola', icon: GraduationCap },
  { href: '/contato', label: 'Contato', icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-full bg-[#0f0f1a] text-[#e4e4e7] hidden md:flex flex-col">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">INTRAEB</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Agência Espacial</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-2 overflow-y-auto">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Menu</p>
        <ul className="space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <AgendaSidebar />

        <div className="mt-6 space-y-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">Acesso Rápido</p>
          <a
            href="https://www.gov.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            <Globe className="w-4 h-4" />
            Ir para o Gov.Br
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            <Users className="w-4 h-4" />
            Setor — Colaboradores
          </a>
        </div>
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center text-sm font-medium">
            AM
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium truncate">Anderson Malta</p>
            <p className="text-xs text-gray-500 truncate">Diretor</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

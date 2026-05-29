import Link from 'next/link';

const links = [
  { href: '/', label: 'Início' },
  { href: '/noticias', label: 'Notícias' },
  { href: '/boletins', label: 'Boletins Internos' },
  { href: '/diretorias', label: 'Diretorias' },
  { href: '/aeb-escola', label: 'AEB Escola' },
  { href: '/contato', label: 'Contato' },
];

export default function Sidebar() {
  return (
    <aside className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold text-blue-900 mb-4 border-b pb-2">Menu</h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

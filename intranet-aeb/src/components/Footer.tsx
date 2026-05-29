export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="font-bold">Agência Espacial Brasileira — AEB</p>
            <p className="text-sm text-blue-300">Setor Policial — SPO, Área 5, Quadra 3, Bloco A</p>
            <p className="text-sm text-blue-300">Brasília/DF — CEP 70610-200</p>
          </div>
          <div className="text-sm text-blue-300">
            <p>© {new Date().getFullYear()} AEB. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

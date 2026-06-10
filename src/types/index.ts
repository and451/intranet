export interface Noticia {
  id: number;
  titulo: string;
  resumo: string;
  data: string;
  categoria: string;
  slug: string;
}

export interface Boletim {
  id: number;
  numero: string;
  titulo: string;
  data: string;
  tipo: 'ordinario' | 'suplementar';
  url: string;
}

export interface Diretoria {
  sigla: string;
  nome: string;
  descricao: string;
  responsavel?: string;
}

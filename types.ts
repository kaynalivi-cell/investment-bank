export interface InvestmentProduct {
  id: string;
  name: string;
  type: 'acao' | 'fundo' | 'renda-fixa' | 'criptomoeda' | 'etf';
  category: string;
  ticker: string;
  price: number;
  variation: number;
  minInvestment: number;
  risk: 'baixo' | 'medio' | 'alto';
  rentability: string;
  image: string;
  description: string;
  features: string[];
  volume: string;
  marketCap?: string;
  dividendYield?: string;
  sector?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  image: string;
}

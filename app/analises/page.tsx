import Image from 'next/image';
import { TrendingUp, TrendingDown, Calendar, User } from 'lucide-react';

export default function AnalisesPage() {
  const analyses = [
    {
      id: 1,
      title: 'Petrobras: Analise Completa e Perspectivas para 2025',
      category: 'Acoes',
      author: 'Carlos Silva',
      date: '10 Nov 2024',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
      summary: 'Analise detalhada sobre os resultados do terceiro trimestre da Petrobras e as perspectivas para o proximo ano considerando os precos do petroleo.',
      trend: 'up',
      recommendation: 'Compra',
    },
    {
      id: 2,
      title: 'Vale: Impacto da Demanda Chinesa no Setor de Mineracao',
      category: 'Acoes',
      author: 'Ana Rodrigues',
      date: '09 Nov 2024',
      image: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=800',
      summary: 'Como a recuperacao economica da China esta afetando os precos do minerio de ferro e qual o impacto nas acoes da Vale.',
      trend: 'up',
      recommendation: 'Compra',
    },
    {
      id: 3,
      title: 'Tesouro Direto: Melhores Opcoes para Investir em Novembro',
      category: 'Renda Fixa',
      author: 'Roberto Santos',
      date: '08 Nov 2024',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
      summary: 'Analise comparativa dos titulos do Tesouro Direto disponiveis e recomendacoes para diferentes perfis de investidor.',
      trend: 'neutral',
      recommendation: 'Manter',
    },
    {
      id: 4,
      title: 'Magazine Luiza: Recuperacao no E-commerce e Novos Negocios',
      category: 'Acoes',
      author: 'Mariana Costa',
      date: '07 Nov 2024',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      summary: 'Avaliacao do processo de recuperacao da Magazine Luiza apos periodo de queda e analise dos novos modelos de negocio da empresa.',
      trend: 'up',
      recommendation: 'Compra',
    },
    {
      id: 5,
      title: 'Bitcoin: Cenario Macro e Expectativas para o Proximo Ciclo',
      category: 'Criptomoedas',
      author: 'Pedro Almeida',
      date: '06 Nov 2024',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800',
      summary: 'Analise tecnica e fundamentalista do Bitcoin considerando o cenario macroeconomico global e os proximos eventos importantes do mercado cripto.',
      trend: 'up',
      recommendation: 'Compra',
    },
    {
      id: 6,
      title: 'Itau Unibanco: Resultados Trimestrais e Dividendos',
      category: 'Acoes',
      author: 'Fernanda Lima',
      date: '05 Nov 2024',
      image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800',
      summary: 'Analise dos resultados do terceiro trimestre do Itau Unibanco e projecoes para o pagamento de dividendos no proximo ano.',
      trend: 'neutral',
      recommendation: 'Manter',
    },
  ];

  const marketInsights = [
    {
      title: 'Mercado em Alta',
      description: 'Ibovespa fecha em alta de 1.2% impulsionado por commodities',
      change: '+1.2%',
      positive: true,
    },
    {
      title: 'Taxa Selic',
      description: 'BC mantem taxa de juros em 12.25% ao ano',
      change: '12.25%',
      positive: null,
    },
    {
      title: 'Dolar',
      description: 'Moeda americana fecha cotada a R$ 4.95',
      change: '-0.8%',
      positive: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Analises de Mercado</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Acompanhe as analises e recomendacoes dos nossos especialistas sobre os principais ativos do mercado.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketInsights.map((insight, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                </div>
                <div className={`text-xl font-bold ml-4 ${
                  insight.positive === true ? 'text-green-600' :
                  insight.positive === false ? 'text-red-600' :
                  'text-gray-900'
                }`}>
                  {insight.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Ultimas Analises</h2>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Todas
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition">
                Acoes
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition">
                Renda Fixa
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition">
                Cripto
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyses.map((analysis) => (
              <div key={analysis.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={analysis.image}
                    alt={analysis.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {analysis.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      analysis.recommendation === 'Compra' ? 'bg-green-100 text-green-800' :
                      analysis.recommendation === 'Venda' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {analysis.recommendation}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {analysis.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {analysis.summary}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{analysis.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{analysis.date}</span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Ler Analise Completa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Receba Analises Exclusivas
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Cadastre-se e receba diariamente as melhores analises e recomendacoes dos nossos especialistas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
              Cadastrar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

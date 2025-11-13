import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { TrendingUp, TrendingDown, ArrowLeft, Shield, Clock, BarChart3, DollarSign, CheckCircle2 } from 'lucide-react';

export default function ProdutoDetalhePage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const isPositive = product.variation >= 0;

  const riskColors = {
    baixo: 'bg-green-100 text-green-800',
    medio: 'bg-yellow-100 text-yellow-800',
    alto: 'bg-red-100 text-red-800',
  };

  const riskLabels = {
    baixo: 'Baixo Risco',
    medio: 'Risco Medio',
    alto: 'Alto Risco',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/produtos" 
            className="inline-flex items-center space-x-2 text-blue-200 hover:text-white transition mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar para produtos</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="relative h-96">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${riskColors[product.risk]}`}>
                    {riskLabels[product.risk]}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <span className="text-sm font-semibold text-blue-600">{product.category}</span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-2">{product.name}</h1>
                  <span className="text-lg text-gray-600">{product.ticker}</span>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline space-x-3 mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <div className={`flex items-center text-lg ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                      {isPositive ? (
                        <TrendingUp className="h-5 w-5 mr-1" />
                      ) : (
                        <TrendingDown className="h-5 w-5 mr-1" />
                      )}
                      <span className="font-semibold">{Math.abs(product.variation)}%</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Variacao nas ultimas 24 horas
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre o Produto</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {product.description}
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Caracteristicas</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {(product.sector || product.marketCap || product.dividendYield) && (
                  <div className="border-t border-gray-200 pt-8 mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Informacoes Adicionais</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.sector && (
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Setor</div>
                          <div className="text-lg font-semibold text-gray-900">{product.sector}</div>
                        </div>
                      )}
                      {product.marketCap && (
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Valor de Mercado</div>
                          <div className="text-lg font-semibold text-gray-900">{product.marketCap}</div>
                        </div>
                      )}
                      {product.dividendYield && (
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Dividend Yield</div>
                          <div className="text-lg font-semibold text-green-600">{product.dividendYield}</div>
                        </div>
                      )}
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Volume Negociado</div>
                        <div className="text-lg font-semibold text-gray-900">{product.volume}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Informacoes de Investimento</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600">Preco Atual</span>
                  </div>
                  <span className="font-bold text-gray-900">
                    R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600">Investimento Minimo</span>
                  </div>
                  <span className="font-bold text-gray-900">
                    R$ {product.minInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600">Rentabilidade</span>
                  </div>
                  <span className="font-bold text-blue-600">{product.rentability}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600">Nivel de Risco</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${riskColors[product.risk]}`}>
                    {riskLabels[product.risk]}
                  </span>
                </div>
              </div>

              <Link
                href="/abrir-conta"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-lg font-bold text-center hover:from-blue-700 hover:to-blue-900 transition block mb-3"
              >
                Investir Agora
              </Link>

              <button className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
                Adicionar a Favoritos
              </button>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Importante:</strong> Rentabilidade passada nao e garantia de resultados futuros. Leia o prospecto antes de investir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { InvestmentProduct } from '../types';
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: InvestmentProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
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
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${riskColors[product.risk]}`}>
            {riskLabels[product.risk]}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="text-sm text-gray-500 font-medium">{product.category}</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">{product.name}</h3>
            <span className="text-sm text-gray-600">{product.ticker}</span>
          </div>
        </div>

        <div className="mt-4 mb-4">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? (
                <TrendingUp className="h-4 w-4 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 mr-1" />
              )}
              <span className="font-semibold">{Math.abs(product.variation)}%</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Investimento minimo: R$ {product.minInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Rentabilidade:</span>
            <span className="font-semibold text-blue-600">{product.rentability}</span>
          </div>
          {product.dividendYield && (
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-gray-600">Dividend Yield:</span>
              <span className="font-semibold text-green-600">{product.dividendYield}</span>
            </div>
          )}
        </div>

        <Link 
          href={`/produtos/${product.id}`}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition flex items-center justify-center space-x-2 group"
        >
          <span>Ver Detalhes</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Filter, Search } from 'lucide-react';

export default function ProdutosPage() {
  const searchParams = useSearchParams();
  const typeFromUrl = searchParams.get('type');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState(typeFromUrl || 'todos');
  const [selectedRisk, setSelectedRisk] = useState('todos');
  const [priceRange, setPriceRange] = useState('todos');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.ticker.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === 'todos' || product.type === selectedType;
      
      const matchesRisk = selectedRisk === 'todos' || product.risk === selectedRisk;
      
      let matchesPrice = true;
      if (priceRange === 'ate-100') matchesPrice = product.price <= 100;
      else if (priceRange === '100-1000') matchesPrice = product.price > 100 && product.price <= 1000;
      else if (priceRange === 'acima-1000') matchesPrice = product.price > 1000;

      return matchesSearch && matchesType && matchesRisk && matchesPrice;
    });
  }, [searchTerm, selectedType, selectedRisk, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nossos Produtos</h1>
          <p className="text-xl text-blue-100">
            Explore nossa variedade de opcoes de investimento
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="h-5 w-5 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">Filtros</h2>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Buscar
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Nome ou ticker..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Tipo de Produto
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                >
                  <option value="todos">Todos</option>
                  <option value="acao">Acoes</option>
                  <option value="renda-fixa">Renda Fixa</option>
                  <option value="fundo">Fundos</option>
                  <option value="etf">ETFs</option>
                  <option value="criptomoeda">Criptomoedas</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Nivel de Risco
                </label>
                <select
                  value={selectedRisk}
                  onChange={(e) => setSelectedRisk(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                >
                  <option value="todos">Todos</option>
                  <option value="baixo">Baixo Risco</option>
                  <option value="medio">Risco Medio</option>
                  <option value="alto">Alto Risco</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Faixa de Preco
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                >
                  <option value="todos">Todos</option>
                  <option value="ate-100">Ate R$ 100</option>
                  <option value="100-1000">R$ 100 - R$ 1.000</option>
                  <option value="acima-1000">Acima de R$ 1.000</option>
                </select>
              </div>

              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedType('todos');
                  setSelectedRisk('todos');
                  setPriceRange('todos');
                }}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition font-semibold"
              >
                Limpar Filtros
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gray-600">
                Exibindo <span className="font-semibold text-gray-900">{filteredProducts.length}</span> produtos
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <p className="text-gray-500 text-lg">
                  Nenhum produto encontrado com os filtros selecionados.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

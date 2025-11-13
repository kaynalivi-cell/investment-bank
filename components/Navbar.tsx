'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, TrendingUp, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [investOpen, setInvestOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">InvestBank</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Inicio
            </Link>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition">
                <span>Investimentos</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/produtos" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">
                  Todos os Produtos
                </Link>
                <Link href="/produtos?type=acao" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Acoes
                </Link>
                <Link href="/produtos?type=renda-fixa" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Renda Fixa
                </Link>
                <Link href="/produtos?type=fundo" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Fundos
                </Link>
                <Link href="/produtos?type=criptomoeda" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">
                  Criptomoedas
                </Link>
              </div>
            </div>

            <Link href="/servicos" className="text-gray-700 hover:text-blue-600 transition">
              Servicos
            </Link>
            <Link href="/analises" className="text-gray-700 hover:text-blue-600 transition">
              Analises
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-blue-600 transition">
              Sobre
            </Link>
            <Link 
              href="/abrir-conta" 
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-900 transition"
            >
              Abrir Conta
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link 
              href="/" 
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            
            <div>
              <button
                onClick={() => setInvestOpen(!investOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-700"
              >
                <span>Investimentos</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${investOpen ? 'rotate-180' : ''}`} />
              </button>
              {investOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link 
                    href="/produtos" 
                    className="block py-2 text-gray-600 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Todos os Produtos
                  </Link>
                  <Link 
                    href="/produtos?type=acao" 
                    className="block py-2 text-gray-600 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Acoes
                  </Link>
                  <Link 
                    href="/produtos?type=renda-fixa" 
                    className="block py-2 text-gray-600 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Renda Fixa
                  </Link>
                  <Link 
                    href="/produtos?type=fundo" 
                    className="block py-2 text-gray-600 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Fundos
                  </Link>
                  <Link 
                    href="/produtos?type=criptomoeda" 
                    className="block py-2 text-gray-600 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Criptomoedas
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/servicos" 
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Servicos
            </Link>
            <Link 
              href="/analises" 
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Analises
            </Link>
            <Link 
              href="/sobre" 
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              href="/abrir-conta" 
              className="block mt-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-lg text-center hover:from-blue-700 hover:to-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Abrir Conta
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

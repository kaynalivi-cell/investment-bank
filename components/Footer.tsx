import Link from 'next/link';
import { TrendingUp, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">InvestBank</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Sua plataforma completa de investimentos. Acoes, fundos, renda fixa e criptomoedas em um so lugar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Investimentos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/produtos?type=acao" className="hover:text-blue-400 transition">Acoes</Link></li>
              <li><Link href="/produtos?type=renda-fixa" className="hover:text-blue-400 transition">Renda Fixa</Link></li>
              <li><Link href="/produtos?type=fundo" className="hover:text-blue-400 transition">Fundos de Investimento</Link></li>
              <li><Link href="/produtos?type=etf" className="hover:text-blue-400 transition">ETFs</Link></li>
              <li><Link href="/produtos?type=criptomoeda" className="hover:text-blue-400 transition">Criptomoedas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre" className="hover:text-blue-400 transition">Sobre Nos</Link></li>
              <li><Link href="/servicos" className="hover:text-blue-400 transition">Servicos</Link></li>
              <li><Link href="/analises" className="hover:text-blue-400 transition">Analises de Mercado</Link></li>
              <li><Link href="/abrir-conta" className="hover:text-blue-400 transition">Abrir Conta</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition">Ajuda</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>Av. Paulista, 1000 - Sao Paulo, SP</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>(11) 3000-0000</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>contato@investbank.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>2024 InvestBank. Todos os direitos reservados.</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-blue-400 transition">Termos de Uso</Link>
            {' | '}
            <Link href="#" className="hover:text-blue-400 transition">Politica de Privacidade</Link>
            {' | '}
            <Link href="#" className="hover:text-blue-400 transition">Regulamentacao</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

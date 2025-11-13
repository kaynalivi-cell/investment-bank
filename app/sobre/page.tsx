import Image from 'next/image';
import { Target, Eye, Award, Users, TrendingUp, Shield } from 'lucide-react';

export default function SobrePage() {
  const values = [
    {
      icon: Shield,
      title: 'Seguranca',
      description: 'Protecao maxima dos seus investimentos com tecnologia de ponta e compliance rigoroso.',
    },
    {
      icon: Users,
      title: 'Transparencia',
      description: 'Informacoes claras e completas para voce tomar decisoes conscientes.',
    },
    {
      icon: TrendingUp,
      title: 'Inovacao',
      description: 'Plataforma moderna e facil de usar, sempre atualizada com as melhores tecnologias.',
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Compromisso com a qualidade em todos os servicos e atendimento personalizado.',
    },
  ];

  const team = [
    {
      name: 'Carlos Mendes',
      role: 'CEO & Fundador',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      description: '20 anos de experiencia no mercado financeiro',
    },
    {
      name: 'Ana Silva',
      role: 'Diretora de Investimentos',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      description: 'Ex-gestora de fundos com MBA em Financas',
    },
    {
      name: 'Roberto Santos',
      role: 'Diretor de Tecnologia',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      description: 'Especialista em seguranca e infraestrutura',
    },
    {
      name: 'Mariana Costa',
      role: 'Diretora de Atendimento',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      description: 'Focada em experiencia do cliente e suporte',
    },
  ];

  const stats = [
    { value: '500k+', label: 'Clientes Ativos' },
    { value: 'R$ 50B+', label: 'Patrimonio sob Custodia' },
    { value: '10+', label: 'Anos no Mercado' },
    { value: '98%', label: 'Satisfacao dos Clientes' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Sobre a InvestBank</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Somos uma corretora de investimentos comprometida em democratizar o acesso ao mercado financeiro com seguranca, transparencia e tecnologia.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Historia</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Fundada em 2014, a InvestBank nasceu com o objetivo de transformar a experiencia de investimento no Brasil. Percebemos que o mercado financeiro ainda era inacessivel para muitos brasileiros e decidimos mudar essa realidade.
                </p>
                <p>
                  Com uma plataforma digital moderna e intuitiva, trouxemos tecnologia de ponta para facilitar o acesso a acoes, fundos, renda fixa e criptomoedas. Hoje, somos uma das principais corretoras do pais, com mais de 500 mil clientes ativos.
                </p>
                <p>
                  Nossa missao continua sendo a mesma desde o primeiro dia: democratizar o acesso aos investimentos, oferecendo uma plataforma segura, transparente e eficiente para todos os brasileiros.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                alt="Equipe InvestBank"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
                alt="Missao e Visao"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Nossa Missao</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Democratizar o acesso aos investimentos, oferecendo uma plataforma completa, segura e acessivel para que todos os brasileiros possam fazer seu dinheiro trabalhar por eles.
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Nossa Visao</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Ser a corretora mais confiavel e inovadora do Brasil, reconhecida pela excelencia no atendimento e pela capacidade de transformar a vida financeira dos nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600">
              Os principios que guiam todas as nossas decisoes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Lideranca</h2>
            <p className="text-xl text-gray-600">
              Conheca as pessoas por tras do sucesso da InvestBank
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Faca parte da InvestBank
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de investidores que ja escolheram a InvestBank para crescer seu patrimonio.
          </p>
          <a
            href="/abrir-conta"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition"
          >
            Abrir Conta Gratis
          </a>
        </div>
      </section>
    </div>
  );
}

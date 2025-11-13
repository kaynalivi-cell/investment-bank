import { Users, BarChart3, Shield, Smartphone, HeadphonesIcon, Award, TrendingUp, FileText } from 'lucide-react';

export default function ServicosPage() {
  const services = [
    {
      icon: Users,
      title: 'Assessoria de Investimentos',
      description: 'Profissionais certificados para orientar suas decisoes de investimento com analises personalizadas.',
      features: [
        'Atendimento personalizado',
        'Analise de perfil de investidor',
        'Recomendacoes sob medida',
        'Acompanhamento continuo',
      ],
    },
    {
      icon: BarChart3,
      title: 'Analise de Mercado',
      description: 'Relatorios diarios e analises aprofundadas sobre o mercado financeiro brasileiro e internacional.',
      features: [
        'Relatorios diarios',
        'Analises graficas',
        'Recomendacoes de especialistas',
        'Alertas personalizados',
      ],
    },
    {
      icon: Shield,
      title: 'Custodia Segura',
      description: 'Seus investimentos protegidos com tecnologia de ponta e seguros contra riscos operacionais.',
      features: [
        'Criptografia bancaria',
        'Protecao contra fraudes',
        'Backup automatico',
        'Auditoria continua',
      ],
    },
    {
      icon: Smartphone,
      title: 'Plataforma Mobile',
      description: 'Aplicativo completo para iOS e Android. Invista onde e quando quiser com praticidade.',
      features: [
        'Interface intuitiva',
        'Notificacoes em tempo real',
        'Biometria para seguranca',
        'Disponivel offline',
      ],
    },
    {
      icon: HeadphonesIcon,
      title: 'Suporte 24/7',
      description: 'Equipe de atendimento disponivel todos os dias para tirar suas duvidas e resolver problemas.',
      features: [
        'Chat ao vivo',
        'Telefone e WhatsApp',
        'Email prioritario',
        'Central de ajuda completa',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Educacao Financeira',
      description: 'Cursos, webinars e conteudos educativos para voce se tornar um investidor mais consciente.',
      features: [
        'Cursos online gratuitos',
        'Webinars com especialistas',
        'E-books e artigos',
        'Certificacao de investidor',
      ],
    },
    {
      icon: FileText,
      title: 'Relatorios e IR',
      description: 'Documentacao completa e facilitada para sua declaracao de imposto de renda.',
      features: [
        'Relatorios mensais',
        'Informe de rendimentos',
        'Historico completo',
        'Exportacao facilitada',
      ],
    },
    {
      icon: Award,
      title: 'Programa de Beneficios',
      description: 'Quanto mais voce investe, mais vantagens e beneficios exclusivos voce recebe.',
      features: [
        'Cashback em operacoes',
        'Taxas reduzidas',
        'Eventos exclusivos',
        'Produtos VIP',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Nossos Servicos</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Oferecemos uma gama completa de servicos para voce investir com seguranca, praticidade e rentabilidade.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="bg-green-100 rounded-full p-1">
                          <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Pronto para conhecer nossos servicos?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Abra sua conta gratuita e tenha acesso a todos os nossos servicos exclusivos.
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

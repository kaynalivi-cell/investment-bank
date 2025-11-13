# InvestBank - Plataforma de Investimentos

Plataforma completa de banco de investimentos estilo XP, desenvolvida com Next.js 14, TypeScript e Tailwind CSS.

## Caracteristicas

- Design profissional e moderno inspirado em corretoras lideres do mercado
- Sistema completo de listagem e detalhes de produtos financeiros
- Filtros funcionais por tipo, risco e preco
- 10+ produtos de investimento (acoes, renda fixa, fundos, ETFs, criptomoedas)
- Paginas de servicos, analises de mercado e sobre a empresa
- Formulario de abertura de conta com multiplos passos
- 100% responsivo para mobile, tablet e desktop
- Otimizacao de imagens com Next/Image

## Tecnologias

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilizacao:** Tailwind CSS
- **Icones:** Lucide React
- **Imagens:** Unsplash (via Next/Image)

## Estrutura do Projeto

```
investment-bank/
├── app/
│   ├── page.tsx                    # Home page
│   ├── produtos/
│   │   ├── page.tsx                # Listagem de produtos com filtros
│   │   └── [id]/page.tsx           # Detalhes do produto
│   ├── servicos/page.tsx           # Pagina de servicos
│   ├── analises/page.tsx           # Analises de mercado
│   ├── sobre/page.tsx              # Sobre a empresa
│   ├── abrir-conta/page.tsx        # Formulario de cadastro
│   ├── layout.tsx                  # Layout principal
│   └── globals.css                 # Estilos globais
├── components/
│   ├── Navbar.tsx                  # Barra de navegacao
│   ├── Footer.tsx                  # Rodape
│   └── ProductCard.tsx             # Card de produto
├── data/
│   └── products.ts                 # Dados dos produtos
├── types.ts                        # Tipos TypeScript
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Instalacao e Execucao

### Pre-requisitos

- Node.js 18+ instalado
- npm, yarn ou pnpm

### Passo a Passo

1. Extraia o arquivo ZIP do projeto

2. Navegue ate a pasta do projeto:
```bash
cd investment-bank
```

3. Instale as dependencias:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm run dev
```

5. Abra o navegador e acesse:
```
http://localhost:3000
```

## Scripts Disponiveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de producao
- `npm run start` - Inicia o servidor de producao
- `npm run lint` - Executa o linter

## Paginas Implementadas

### 1. Home (/)
- Hero section com chamada para acao
- Produtos em destaque
- Diferenciais da plataforma
- Estatisticas
- Call-to-action

### 2. Produtos (/produtos)
- Listagem completa de produtos
- Filtros funcionais:
  - Busca por nome/ticker
  - Tipo de produto
  - Nivel de risco
  - Faixa de preco
- Cards com informacoes detalhadas

### 3. Detalhes do Produto (/produtos/[id])
- Galeria de imagens
- Informacoes completas
- Graficos de variacao
- Caracteristicas
- Call-to-action para investir

### 4. Servicos (/servicos)
- 8 servicos principais
- Assessoria, analises, custodia, plataforma mobile
- Suporte, educacao, relatorios e programa de beneficios

### 5. Analises (/analises)
- Insights de mercado
- Ultimas analises dos especialistas
- Categorias (acoes, renda fixa, cripto)
- Newsletter

### 6. Sobre (/sobre)
- Historia da empresa
- Missao e visao
- Valores
- Equipe de lideranca
- Estatisticas

### 7. Abrir Conta (/abrir-conta)
- Formulario multi-step (3 etapas)
- Validacao de campos
- Beneficios destacados
- Processo seguro

## Produtos Incluidos

1. **Acoes**
   - Petrobras PN (PETR4)
   - Vale ON (VALE3)
   - Itau Unibanco PN (ITUB4)
   - Magazine Luiza ON (MGLU3)
   - Ambev ON (ABEV3)

2. **Renda Fixa**
   - CDB Premium XP
   - Tesouro Selic 2027

3. **Fundos**
   - XP Bolsa Americana (XPAM11)

4. **ETFs**
   - IVVB11 - S&P 500

5. **Criptomoedas**
   - Bitcoin (BTC)

## Customizacao

### Cores
As cores principais podem ser ajustadas em `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Ajuste os tons de azul aqui
  }
}
```

### Produtos
Para adicionar/editar produtos, modifique o arquivo `data/products.ts`

### Imagens
Todas as imagens sao carregadas do Unsplash. Para usar imagens proprias:
1. Adicione as imagens em `public/images/`
2. Atualize os caminhos nos componentes

## Recursos Implementados

- Navegacao responsiva com menu mobile
- Sistema de filtros funcionais
- Cards de produtos com hover effects
- Badges de risco e recomendacao
- Formulario com validacao
- Design system consistente
- SEO otimizado
- Performance otimizada

## Browser Support

- Chrome (ultimas 2 versoes)
- Firefox (ultimas 2 versoes)
- Safari (ultimas 2 versoes)
- Edge (ultimas 2 versoes)

## Producao

Para fazer deploy em producao:

1. Crie a build:
```bash
npm run build
```

2. Teste a build:
```bash
npm run start
```

3. Faca deploy em plataformas como:
   - Vercel (recomendado para Next.js)
   - Netlify
   - AWS
   - Digital Ocean

## Licenca

Este projeto e para fins de demonstracao.

## Contato

Para duvidas ou sugestoes sobre o projeto, entre em contato.

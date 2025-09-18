
# CAP Minas - Distribuição e Logística

Aplicação institucional da CAP Minas, empresa referência em distribuição de alimentos e bebidas, com atuação em mais de 200 municípios de Minas Gerais. Desenvolvida com Next.js, React, Tailwind CSS e TypeScript.

## Sumário

- [Visão Geral](#visão-geral)
- [Principais Funcionalidades](#principais-funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Uso](#instalação-e-uso)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contato](#contato)

---

## Visão Geral

O site apresenta a CAP Minas, seus diferenciais, áreas de cobertura, marcas parceiras, estrutura logística e formas de contato. O objetivo é fortalecer a presença digital, facilitar o acesso de clientes e parceiros às informações e destacar a excelência em distribuição.

## Principais Funcionalidades

- **Página institucional**: Informações sobre a empresa, missão, diferenciais e áreas de atuação.
- **Destaques**: Merchandising, marcas líderes, priorização de qualidade.
- **Marcas Parceiras**: Carrossel animado com logos e links para sites das marcas distribuídas.
- **Mapa de Cobertura**: Visualização das regiões atendidas em Minas Gerais.
- **Entregas**: Detalhes sobre frota, rastreamento, armazenamento e eficiência logística.
- **Diferenciais**: Pontos de venda, atendimento semanal, presença em municípios.
- **Footer**: Informações institucionais, políticas, contato e redes sociais.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) (v15)
- [React](https://react.dev/) (v19)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (v4)
- [Framer Motion](https://www.framer.com/motion/) (animações)
- [Lucide React](https://lucide.dev/) (ícones)
- ESLint, PostCSS

## Instalação e Uso

1. **Clone o repositório:**
	```bash
	git clone <url-do-repositorio>
	cd cap-minas
	```
2. **Instale as dependências:**
	```bash
	npm install
	# ou
	yarn install
	```
3. **Execute o servidor de desenvolvimento:**
	```bash
	npm run dev
	```
	Acesse [http://localhost:3000](http://localhost:3000) no navegador.

4. **Build para produção:**
	```bash
	npm run build
	npm start
	```

## Estrutura de Pastas

```
src/
  app/
	 components/        # Componentes React reutilizáveis
		generics/        # Botão, Card, Carousel, etc
	 fonts/             # Fontes customizadas
	 globals.css        # Estilos globais
	 layout.tsx         # Layout principal
	 page.tsx           # Página principal
public/
  logos/               # Logos das marcas
  carousel/            # Imagens e vídeos do carrossel
  maps/                # Mapas de cobertura
```

## Scripts

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm start` - Inicia o servidor em produção
- `npm run lint` - Executa o ESLint

## Contato

- **Telefone:** (34) 3030-0247
- **E-mail:** contato@capminas.net.br
- **Site:** [https://www.capminas.net.br](https://www.capminas.net.br)

---

### Licença
Este projeto é privado e de uso institucional da CAP Minas.

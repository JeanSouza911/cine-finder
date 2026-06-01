# 🎬 Cine Finder Rebuild

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide_React-292929?style=for-the-badge&logo=lucide&logoColor=white)

## 📝 Sobre o Projeto (O Rebuild)

Este projeto representa um **rebuild completo** de uma aplicação anterior que consumia a API do TMDB (The Movie Database). Mantendo a lógica central de integração para obter informações detalhadas sobre produções cinematográficas, esta nova versão foi totalmente reestruturada e modernizada. O foco principal deste rebuild foi elevar o nível técnico da stack, priorizando performance através de renderização inteligente, segurança com tipagem estática, acessibilidade nativa e uma interface fluida baseada em componentes reutilizáveis.

## 🛠️ Stack Tecnológica e Justificativas

* **Next.js (App Router):** Escolhido para aproveitar os benefícios de arquitetura híbrida com *Server-Side Rendering* (SSR) e *Incremental Static Regeneration* (ISR). Isso otimiza drasticamente o SEO para a indexação de filmes e melhora a performance do carregamento inicial (Core Web Vitals).
* **TypeScript:** Adotado para trazer uma camada robusta de segurança ao código, garantindo tipagem estática rigorosa para os dados complexos e dinâmicos provenientes da API do TMDB, elevando a DX (Developer Experience).
* **Tailwind CSS:** Utilizado para uma estilização rápida, utilitária e altamente performática. Sua abordagem *utility-first* facilita a manutenção da consistência visual e reduz o tamanho final do bundle CSS.
* **shadcn/ui:** Biblioteca de componentes agnóstica baseada em Radix UI. Garante que os padrões de acessibilidade (WAI-ARIA, navegação por teclado) sejam mantidos em nível elevado, oferecendo total controle sobre a estilização.
* **Lucide React:** Selecionado como o conjunto de ícones vetoriais, oferecendo um pacote leve e visualmente consistente com a estética limpa do ecossistema.

## 🚀 Funcionalidades Atuais (MVP)

* **⚡ Listagem de Filmes Populares:** Página inicial integrada diretamente à API do TMDB, exibindo os títulos em destaque em tempo real.
* **🔍 Busca Global em Tempo Real:** Mecanismo de pesquisa fluida por títulos processada diretamente via servidor.
* **📱 Interface Responsiva:** Design totalmente adaptável a qualquer tamanho de tela com componentes acessíveis e modernos utilizando shadcn/ui.

## 🗺️ Roadmap & Próximos Passos (Em Desenvolvimento)

O projeto está em constante evolução. As próximas etapas de implementação estão divididas em duas frentes:

### 🎬 Expansão de Conteúdo & Telas
- [ ] **Filtros Dinâmicos na Home:** Implementação de controle (abas/navegação) para permitir que o usuário alterne entre os filmes *Populares*, *Em Cartaz* e *Melhores Avaliados*.
- [ ] **Elenco Principal:** Exibição dos atores e personagens envolvidos na produção dentro da tela de detalhes.
- [ ] **Gêneros:** Tags identificadoras das categorias do filme.
- [ ] **Trailer Oficial:** Integração de player responsivo para exibição de trailers direto na plataforma.

### 🏛️ Engenharia & Otimização Arquitetural
- [ ] **Estratégias de Cache Híbridas (Next.js):** Implementação de *Incremental Static Regeneration* (ISR) especificamente para otimizar as listagens de categorias fixas (evitando requisições repetitivas ao TMDB) e *Server-Side Rendering* (SSR) para as buscas.
- [ ] **Custom Hooks Pattern:** Isolamento de toda a lógica de consumo da API do TMDB em hooks reutilizáveis (ex: `useMovieFetcher`), mantendo a camada visual limpa.
- [ ] **Tratamento de Erros e Resiliência:** Implementação de *Error Boundaries* para garantir que falhas ou limites da API externa não quebrem a aplicação, exibindo estados amigáveis ao usuário.

## ⚙️ Como Executar o Projeto

Para clonar e executar este projeto em seu ambiente de desenvolvimento, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/cine-finder.git
    cd cine-finder
    ```

2.  **Instale as dependências:**
    Utilize seu gerenciador de pacotes preferido:
    ```bash
    npm install
    # ou pnpm install
    # ou yarn install
    ```

3.  **Configure o ambiente:**
    Crie um arquivo `.env` na raiz do projeto, baseado no `.env.example` (se existir), e adicione sua chave de API do TMDB. **Não exponha sua chave de API diretamente no código ou em commits públicos.**

    Exemplo de `.env`:
    ```
    NEXT_PUBLIC_TMDB_API_KEY=sua_chave_aqui
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

    O projeto estará disponível em `http://localhost:3000`.

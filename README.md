# 🎬 Netflix Clone - React + Tailwind CSS

Este projeto é um clone da interface da Netflix, desenvolvido para colocar em prática conceitos de manipulação de listas e estilização moderna com Tailwind CSS.



## 🛠️ Tecnologias Utilizadas

* **React.js**: Biblioteca principal para construção da UI.
* **Tailwind CSS**: Framework CSS utilitário para estilização rápida e moderna.
* **Vite**: Build tool para um ambiente de desenvolvimento veloz.
* **HeroIcons**: Ícones utilizados na interface.

## ✨ Funcionalidades

* **Navbar**: Menu superior com gradiente e navegação fixa.
* **Banner de Destaque (Hero)**: Seção principal com informações dinâmicas do título (Stranger Things).
* **Listas Dinâmicas**: Fileiras de filmes renderizadas através de arrays de objetos.
* **Efeito Hover**: Animação de escala nos cards de filmes e mudança de opacidade nos itens do menu.
* **Rodapé Completo**: Links institucionais e ícones de redes sociais seguindo o padrão original.

## 💡 Próximos Passos & Melhorias

O projeto está em constante evolução. As seguintes funcionalidades estão planejadas para as próximas versões:

* **Responsividade Total:** Otimização do layout para dispositivos móveis e tablets, garantindo uma experiência fluida em qualquer tamanho de tela.
* **Carrossel Funcional:** Implementação de lógica de scroll lateral nos botões de navegação das listas para navegar por um catálogo maior.
* **Hero Dinâmico:** Sistema de rotação automática e aleatória do banner principal, exibindo diferentes títulos em destaque a cada acesso.
* **Interatividade Avançada:** Refinamento do efeito de *scale* nos cards de filmes durante o hover, incluindo a exibição de metadados (ano, classificação e gênero) ao expandir.
* **Integração com API:** Substituição dos dados estáticos por uma integração real com a API do TMDB para obter filmes e séries em tempo real.


## 🚀 Como instalar e rodar

1.  **Clone o repositório:**
    ```bash
    git clone (https://github.com/seu-usuario/seu-repositorio.git)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

## 📂 Estrutura de Componentes

O projeto é dividido em 4 componentes principais para facilitar a manutenção:

* `<Nav />`: Gerencia a logo, links de navegação e perfil do usuário.
* `<Hero />`: Banner de impacto com imagem de fundo e botões de ação.
* `<Lists />`: Responsável por mapear e exibir as fileiras de conteúdos.
* `<Footer />`: Contém as redes sociais e informações corporativas.

---
💡 *Projeto desenvolvido com fins puramente educacionais e de estudo.*
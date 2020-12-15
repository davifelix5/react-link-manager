# Link manager frontend with ReactJS

## Front-end de aplicação para gerenciar links feita com ReactJS

### Base para o projeto
Esse projeto foi feito durante a Maratona JS, uma semana intensiva de conteúdo e muito aprendizado fornecida gratuitamente pelo [@emersonbrogadev](https://www.instagram.com/emersonbrogadev/)

### Estilização
Para a estilização do projeto, foi usado um [UI KIT](https://demos.creative-tim.com/now-ui-kit/index.html) baseado em **Bootstrap**

### Funcionalidades
1. Single Page Aplication **(SPA)** com ReactJS
    - Permite a navegação entre páginas com a alteração apenas das partes que mudam, sem necessidade de recarregar a página
2. **Redux** para gerenciamento de estados
    - Permite a centralização dos estados de toda a aplicação a partir de **reducers** e **actions**
3. Requisições com headers de autenticação feitas a partir da biblioteca **axios**
    - A biblioteca axios permite a realização de requisições para a API de uma maneira mais simplificada a partir de funcionalidades como a definição de uma `baseUrl`
4. Armazenamento de **token** e **refresh token** em cookies com a biblioteca **cookie-universal**
    - Foram criados `helpers` para lidar com cookies e com o armazenamento de tokens **JWT**
5. Tratamento do **refresh token**
    - Foi criado um componente que verifica a expiração do token e, caso ela esteja próxima, faz uma requisição para API com o refresh token armezanado nos cookies, substituindo, nos cookies, o antigo token expirado por um novo
6. Uso de Sass
    - Para o estilizar a aplicação, foi usado **Sass** a partir de arquivos `.scss` do bootstrap e do ui-kit. No arquivo `main.scss`, esses arquivos são importados e também são escritas algumas estilizações complementares
7. Páginas para CRUD de links
    - Página para vizualizar todos os links, onde é possível apagar os links, havendo uma confirmação de exclusão a partir de um **componente Modal**
    - Página com **formulário** para criar um novo link ou editar um link já existente

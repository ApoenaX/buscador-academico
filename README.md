<div align="center">
<a href='https://www.freepik.com/vectors/computer'>Computer vector created by pch.vector - www.freepik.com</a></div>
<h1 align="center">
    <img alt="🔎 Buscador-Acadêmico 🎓" title="#BuscadorAcadêmico" src="banner.png" />
</h1>

**🎓 AcademicAI** é um projeto em andamento que visa aplicar técnicas de inteligência artificial para recuperar e organizar dados da produção intelectual e científica nacional. Neste repositório, disponibilizamos o código fonte referente ao nosso _buscador_, o qual foi criado utilizando o [Create React App](https://github.com/facebook/create-react-app).

## Sobre o Projeto

🔎 Buscador-Acadêmico 🎓 - é uma ferramenta que permite consultar informações e processos sobre pós-graduações do Brasil que se encontram disponíveis na Plataforma Sucupira e no Portal de Dados Abertos da Capes. Imagem da aplicação abaixo:

<div align="center">
<img src="https://user-images.githubusercontent.com/8815320/147611552-d6800056-00a0-4dc7-96dd-008dddfacf7d.png" alt="Tela da aplicação" height=300/>
</div>

Acadêmicos, pesquisadores e interessados poderão realizar consultas sobre:

- qualis-periódicos
- trabalhos de conclusão de curso (contempla teses e dissertações)
- produções intelectuais

## :hammer_and_wrench:Como executar o projeto

É necessário possuir o [Git](https://git-scm.com/) e [NodeJs](https://nodejs.org/en/) instalados para prosseguir com as etapas a seguir. Utilizamos o [Yarn](https://yarnpkg.com/) como o nosso gerenciador de pacotes do node.

### :game_die: Rodando a aplicação

Para desenvolver a aplicação localmente, precisamos executar o servidor de desenvolvimento:

```bash
# 1. Faça clone deste repositório
git clone https://github.com/academicai/buscador-academico.git

# 2. Entre na pasta do projeto 
cd buscador-academico

# 3. Instale as dependências
yarn install

# 4. Execute a aplicação em modo de desenvolvimento
yarn start

# O servidor iniciará na porta:3000 - acesse http://localhost:3000
```

### :arrow_forward: Usando a aplicação

A aplicação ficará disponível por padrão em http://localhost:3000, no modo de desenvolvimento ela utiliza uma API simulada pela biblioteca [Mirage](https://miragejs.com/).

O buscador retorna resultados para as seguintes palavras-chave:

- primeira
- segunda
- terceira
- quarta
- quinta

## :rotating_light: ​Informações

-   As informações desta ferramenta foram obtidas da [Plataforma Sucupira](https://sucupira.capes.gov.br/sucupira/) via _webscraping_ ou  foram extraídas do [Portal de Dados Abertos da CAPES](https://dadosabertos.capes.gov.br/).
-   Esse buscador tenta fazer uma correspondência entre a pergunta e os dados para retornar os resultados mais similares semanticamente.
-   O conteúdo dos dados não é gerado artificialmente e nem pelos autores.
-   Algumas informações do resultado podem ser truncadas caso ultrapassem a quantidade máxima caracteres.
-   Todos os dados utilizados pela ferramenta estão disponíveis publicamente nos links citados no início dessa seção.

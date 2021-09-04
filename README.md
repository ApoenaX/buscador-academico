<h1 align="center">
 🔎 Buscador-Acadêmico 🎓
</h1>

<img src="public/buscador.png" alt="Buscador-Acadêmico" style="zoom:80%;" />

<div align="center">

**🎓 AcademicAI** é um projeto em andamento que visa aplicar técnicas de inteligência artificial para recuperar e organizar dados da produção intelectual e científica nacional.

Neste repositório, disponibilizamos o código fonte referente ao nosso _buscador_, o qual foi criado utilizando o [Create React App](https://github.com/facebook/create-react-app).

## :hammer_and_wrench:Como executar o projeto

É necessário possuir o [Git](https://git-scm.com/) e [NodeJs](https://nodejs.org/en/) instalados para prosseguir com as etapas a seguir. Utilizamos o [Yarn](https://yarnpkg.com/) como o nosso gerenciador de pacotes do node.

### Executando localmente

Para desenvolver o site site localmente, precisamos executar o servidor de desenvolvimento:

```bash
# Faça clone deste repositório
git clone https://github.com/academicai/buscador-academico.git
# Entre na pasta do repositório
cd buscador-academico
# Instale as dependências
yarn install
# Execute a aplicação localmente
yarn start
```

## :information_source: ​Informações

Essa extensão utiliza as informação de Qualis-Periódicos extraída via _webscraping_ da [Plataforma Sucupira](sucupira.capes.gov.br/) e vários conjuntos de dados do [Portal de Dados Abertos da CAPES](dadosabertos.capes.gov.br/) .

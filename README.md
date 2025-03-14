# 🤖 Imersão Dev Back-End

Desenvolvido como parte do aprendizado sobre desenvolvimento de APIs, bancos de dados e práticas de back-end.

## 📝 Descrição do Projeto
Este projeto consiste em uma API de blog de fotos que utiliza Node.js, MongoDB e ferramentas de testes como Postman e Thunder Client. Durante a imersão, exploramos conceitos essenciais de back-end, incluindo:

- Criação e gerenciamento de servidores com Node.js.
- Configuração e integração de bancos de dados MongoDB.
- Manipulação de rotas e métodos HTTP.
- Envio e armazenamento de imagens.

## 🚀 Tecnologias Utilizadas
- **Linguagem:** JavaScript
- **Framework:** Node.js
- **Banco de Dados:** MongoDB
- **Ferramentas:** Postman, Thunder Client, VS Code

## 📚 Estrutura do Projeto
### Aula 1
- Configuração inicial do ambiente de desenvolvimento.
- Criação de um servidor básico com Node.js.
- Introdução ao conceito de API Key para integração com ferramentas externas.

### Aula 2
- Implementação de uma base de dados com MongoDB.
- Utilização de mocks para simulação de dados.
- Primeiras rotas configuradas na API.

### Aula 3
- Configuração de clusters e bases de dados no MongoDB Atlas.
- Integração entre a API e o banco de dados utilizando variáveis de ambiente.
- Refatoração de rotas GET para otimização.

### Aula 4
- Desenvolvimento de rotas POST para envio de informações e upload de imagens.
- Implementação de testes via Postman e Thunder Client.

### Aula 5
- Otimização e conclusão das rotas principais.
- Finalização do fluxo de manipulação e exibição de imagens no blog.

## 🛠️ Integração com a API do Google Gemini
Este projeto também conta com a integração da **API do Google Gemini**, que permite a geração e aprimoramento de conteúdo por meio de Inteligência Artificial.

### Como utilizar a API do Google Gemini:
1. **Criar uma conta e obter uma chave de API** no [Google Cloud Console](https://console.cloud.google.com/).
2. **Ativar a API do Google Gemini** no seu projeto.
3. **Instalar as dependências necessárias** no projeto:
   ```sh
   npm install axios dotenv
   ```
4. **Criar um arquivo `.env`** para armazenar sua chave de API:
   ```sh
   GEMINI_API_KEY=your_api_key_here
   ```
5. **Exemplo de chamada para a API do Google Gemini:**
   ```javascript
   require('dotenv').config();
   const axios = require('axios');

   const GEMINI_API_URL = 'https://api.gemini.google.com/v1/generateText';
   const apiKey = process.env.GEMINI_API_KEY;

   async function generateText(prompt) {
       try {
           const response = await axios.post(GEMINI_API_URL, {
               prompt: prompt,
           }, {
               headers: { 'Authorization': `Bearer ${apiKey}` }
           });
           console.log(response.data);
       } catch (error) {
           console.error('Erro ao gerar texto:', error);
       }
   }

   generateText('Escreva um texto sobre Inteligência Artificial');
   ```
6. **Executar o código:**
   ```sh
   node script.js
   ```

## 🔧 Como Executar o Projeto
1. **Clone este repositório:**
   ```sh
   git clone https://github.com/GU1LHERMESILV4/ImersaoDevBackEnd.git
   ```
2. **Instale as dependências:**
   ```sh
   npm install
   ```
3. **Configure as variáveis de ambiente no arquivo `.env`.**
4. **Inicie o servidor:**
   ```sh
   npm start
   ```
5. **Utilize ferramentas como Postman ou Thunder Client para testar as rotas da API.**

---



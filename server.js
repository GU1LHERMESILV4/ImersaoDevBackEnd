// Importa o framework Express para criar a aplicação web
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do servidor Express
const app = express(); 
app.use(express.static("uploads"))
routes(app);
// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
  console.log("Servidor escutando...");
});






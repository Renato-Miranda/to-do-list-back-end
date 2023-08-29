import express from "express";
import UsuariosController from "./src/controllers/usuarios.js"
import TarefasController from "./src/controllers/tarefa.js";

const app = express() // instance of express
const port = process.env.PORT | 3000

app.listen(port, () => {
    console.log('Server listening on');
})

UsuariosController.rotas(app)
TarefasController.rotas(app)
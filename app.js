import express from "express";
import cors from "cors";
import UsuariosController from "./src/controllers/usuarios.js"
import TarefasController from "./src/controllers/tarefa.js";

const app = express() // instance of express
const port = process.env.PORT | 3000

app.listen(port, () => {
    console.log('Server listening on');
})
app.use(express.json())

app.use(cors("*"))

UsuariosController.rotas(app)
TarefasController.rotas(app)
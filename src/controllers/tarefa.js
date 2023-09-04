import TarefasModel from "../models/TarefasModel.js"
import TarefasMetodos from "../utils/TarefasMetodos.js"


class TarefasController{
    /**
     * método de rotas da entidade usuário recebendo como argumento a instancia do express.
     * @param {Express} app 
     */
    static rotas(app){

        app.get("/tarefas", (req, res) => {
            const tarefas = TarefasMetodos.buscarTarefa()
            res.status(200).json(tarefas)
        })
        app.post("/tarefas", (req, res) => {
            const body = Object.values(req.body)
            const tarefa = new TarefasMetodos(...body)
            TarefasMetodos.inserirTarefa(tarefa)
            res.status(200).json({
                error: false,
                message: 'Tarefa criada com sucesso'
            })
        })
    }
}

export default  TarefasController
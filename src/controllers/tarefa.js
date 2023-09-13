import TarefasMetodos from "../DAO/TarefasMetodos.js"
import TarefasModel from "../models/TarefasModel.js"
import ValidacaoServices from "../services/ValidacaoServices.js"

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

        app.get("/tarefas/:id", (req, res) => {
            const id = req.params.id
            const resposta = TarefasMetodos.buscarTarefaPorId(id)
            res.status(200).json(resposta)
        })

        app.delete("/tarefas/:id", (req, res) => {
            const id = req.params.id
            const isValid = ValidacaoServices.validarExistencia(id)
            if(isValid){
                TarefasMetodos.deletarTarefaPorId(id)
            res.status(200).json({error: false, message: "tarefa Excluída"})
            }
            res.status(404).json({error: true, message: 'Tarefa não encontrada'})
        })

        app.post("/tarefas", (req, res) => {
            const body = Object.values(req.body)
            const tarefa = new TarefasModel(...body)
            TarefasMetodos.inserirTarefa(tarefa)
            res.status(200).json({
                error: false,
                message: 'Tarefa criada com sucesso'
            })
        })
    }
}

export default  TarefasController

import TarefasMetodos from "../DAO/TarefasMetodos.js"
import TarefasModel from "../models/TarefasModel.js"
import ValidacaoServices from "../services/ValidacaoServices.js"

class TarefasController {
    /**
     * método de rotas da entidade usuário recebendo como argumento a instancia do express.
     * @param {Express} app 
     */
    static rotas(app) {

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
            if (isValid) {
                TarefasMetodos.deletarTarefaPorId(id)
                res.status(200).json({ error: false, message: "tarefa Excluída" })
            }
            res.status(404).json({ error: true, message: 'Tarefa não encontrada' })
        })

        app.post("/tarefas", async (req, res) => {
            const body = Object.values(req.body)
            const isValid = ValidacaoServices.validaCamposUsuario(...body)
            if (isValid) {
                const tarefa = new TarefasModel(...body)
                try {
                    await TarefasMetodos.inserirTarefa(tarefa)
                    res.status(200).json({
                        error: false,
                        message: 'Tarefa criada com sucesso'
                    })
                } catch (error) {
                    res.status(503).json({ error: true, message: 'Servidor indisponível no momento' })
                }
            } else {
                res.status(400).json({ error: true, message: 'Campos inválidos' })
            }
        })
        app.put("/tarefas/:id", (req, res) => {
            const id = req.params.id
            const body = req.body
            const exists = ValidacaoServices.validarExistenciaTarefa(id)
            const isValid = ValidacaoServices.validaCamposTarefa(body.titulo, body.data, body.descricao, body.status)
            if (exists) {
                if (isValid) {
                    const tarefaModelado = new TarefasModel(body.titulo, body.data, body.descricao, body.status)
                    TarefasMetodos.atualizarTarefaPorId(id, tarefaModelado)
                    res.status(204).json()
                }
                res.status(400).json({ error: true, message: 'Campos inválidos' })
            }
            res.status(404).json({ error: true, message: 'Tarefa não encontrado para o id ${id}' })
        })
    }
}

export default TarefasController

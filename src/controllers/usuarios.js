import UsuariosModel from "../models/UsuariosModel.js"
import ValidacaoServices from "../services/ValidacaoServices.js"
import UsuariosMetodos from "../utils/UsuariosMetodos.js"

class UsuariosController {
    /**
     * método de rotas da entidade usuário recebendo como argumento a instancia do express.
     * @param {Express} app 
     */
    static rotas(app) {
        app.get("/usuarios", (req, res) => {
            const usuarios = UsuariosMetodos.buscarTodos()
            res.status(200).json(usuarios)
        })

        app.get("/usuarios/:id", (req, res) => {
            const id = req.params.id
            const resposta = UsuariosMetodos.buscarUsuarioPorId(id)
            res.status(200).json(resposta)
        })

        app.delete("/usuarios/:id", (req, res) => {
            const id = req.params.id
            const isValid = ValidacaoServices.validarExistencia(id)
            if(isValid){
                UsuariosMetodos.deletarUsuarioPorId(id)
                res.status(200).json({
                    error: false, message: 'Excluido com sucesso'
                })
            }
            res.status(404).json({error: true, message: 'Usuarios não encontrado'})
        })

        app.post("/usuarios", (req, res) => {
            const body = Object.values(req.body)
            const usuario = new UsuariosModel(...body)
            UsuariosMetodos.inserisUsuario(usuario)
            res.status(200).json({
                error: false,
                mensagem: 'usuario criado com sucesso'
            })
        })

    }
}

export default UsuariosController
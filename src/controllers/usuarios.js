import UsuariosModel from "../models/UsuariosModel.js"
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
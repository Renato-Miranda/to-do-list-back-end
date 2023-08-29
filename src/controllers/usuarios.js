class UsuariosController{
    /**
     * método de rotas da entidade usuário recebendo como argumento a instancia do express.
     * @param {Express} app 
     */
    static rotas(app){
        app.get("/", (req, res) => {
            res.send(`
                <h1>Hello Friend</h1>
            `)
        })
        
        app.get("/usuarios", (req, res) => {
            res.status(200).json({
                "usuarios": {
                    "usuario01": {
                        nome: "Walter",
                    },
                    "usuario02": {
                        nome: 'Matheus',
                        email: 'matheus@email.com',
                        idade: 25
                    },
                    "usuario03": {
                        nome: 'Lucas',
                        email: 'lucas@email.com',
                        idade: 26
                    },
                    "usuario04": {
                        nome: 'Martins',
                        email: 'martins@email.com',
                        idade: 27
                    },
                }
        
            })
        })
        
    }
}

export default  UsuariosController
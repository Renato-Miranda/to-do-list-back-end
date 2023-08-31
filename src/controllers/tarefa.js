class TarefasController{
    /**
     * método de rotas da entidade usuário recebendo como argumento a instancia do express.
     * @param {Express} app 
     */
    static rotas(app){

        app.get("/tarefas", (req, res) => {
            res.status(200).json({
                "tarefas": {
                    "tarefa01": {
                        usuario: "Walter",
                        nome: "Comer Repolho",
                        descrição: "Comer Repolho com polenta",
                        data: "10/12/2025",
                        status: true
                    },
                    "tarefa02": {
                        usuario: "Walter",
                        nome: "aula de inglês",
                        descrição: "Assistir uma aula de inglês",
                        data: "10/12/2077",
                        status: true
                    },
                }
            })
        })
        app.post("/tarefas", (req, res) => {
            res.status(200).json({
                "usuario01": "postou um post kk"
            })
        })
    }
}

export default  TarefasController
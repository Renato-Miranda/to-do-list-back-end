Database
import Database from "../database/Database.js";
import DatabaseMetodos from "./DatabaseMetodos.js";

const TAREFAS_TABELA = "Tarefas"
class TarefasMetodos extends DatabaseMetodos {
    static inserirTarefa(data){
        this.inserir(TAREFAS_TABELA, data)
    }
    static buscarTarefa(){
        return this.buscar(TAREFAS_TABELA)
    }
    static buscarTarefaPorId(id){
        return this.buscarPorId(TAREFAS_TABELA, id)
    }
    static deletarTarefaPorId(id){
        delete this.deletarPorId(TAREFAS_TABELA, id)
    }
}

export default TarefasMetodos;
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
}

export default TarefasMetodos;
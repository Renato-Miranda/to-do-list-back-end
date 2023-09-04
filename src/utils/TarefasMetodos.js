import Database from "../database/Database";
import DatabaseMetodos from "./DatabaseMetodos";

const TAREFAS_TABELA = "Tarefas"
class TarefasMetodos extends DatabaseMetodos {
    static inserirTarefa(data){
        this.inserirTarefa(TAREFAS_TABELA, data)
    }
    static buscarTarefa(){
        return this.buscarTarefa(TAREFAS_TABELA)
    }
}

export default TarefasMetodos;
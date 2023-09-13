Database
import Database from "../database/Database.js";
import DatabaseMetodos from "./DatabaseMetodos.js";

const TAREFAS_TABELA = "TAREFAS"
class TarefasMetodos extends DatabaseMetodos {
    static async inserirTarefa(data) {
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO TAREFAS (titulo, data, descricaco, status) VALUES (?, ?, ?,?) 
        `
        const result = await this.inserir(query, dataValues)
        return result
    }
    static buscarTarefa() {
        return this.buscar(TAREFAS_TABELA)
    }
    static buscarTarefaPorId(id) {
        return this.buscarPorId(TAREFAS_TABELA, id)
    }
    static deletarTarefaPorId(id) {
        delete this.deletarPorId(TAREFAS_TABELA, id)
    }
    static atualizarTarefaPorId(id, data) {
        this.atualizarPorId(TAREFAS_TABELA, id, data)
    }
}

export default TarefasMetodos;
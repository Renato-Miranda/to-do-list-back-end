Database
import Database from "../database/Database.js";
import DatabaseMetodos  from "./DatabaseMetodos.js";


const  USUARIOS_TABELA = "USUARIOS"
class UsuariosMetodos extends DatabaseMetodos {
    static inserisUsuario(data){
        this.inserir(USUARIOS_TABELA, data)
    }
    static async buscarTodos(){
        return await this.buscar(USUARIOS_TABELA)
    } 
    static buscarUsuarioPorId(id){
        return this.buscarPorId(USUARIOS_TABELA, id) 
    }
    static deletarUsuarioPorId(id){
        delete this.deletarPorId(USUARIOS_TABELA, id) 
    }
    static atualizarUsuarioPorId(id, data){
        this.atualizarPorId(USUARIOS_TABELA, id, data)
    }
}

export default UsuariosMetodos; 
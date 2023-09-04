Database
import Database from "../database/Database.js";
import DatabaseMetodos  from "./DatabaseMetodos.js";


const  USUARIOS_TABELA = "Usuarios"
class UsuariosMetodos extends DatabaseMetodos {
    static inserisUsuario(data){
        this.inserir(USUARIOS_TABELA, data)
    }
    static buscarTodos(){
        return this.buscar(USUARIOS_TABELA)
    } 
}

export default UsuariosMetodos; 
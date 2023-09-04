import Database from "../database/Database.js"
import DataBase from "../database/Database.js"

class DatabaseMetodos{
    static inserir(entidade, data){
        DataBase[entidade].push(data)
    }
    static buscar(entidade){
        return DataBase[entidade]
    }
}

export default DatabaseMetodos
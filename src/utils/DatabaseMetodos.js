import DataBase from "../database/Database.js"

class DatabaseMetodos{
    static inserir(entidade, data){
        DataBase[entidade].push(data)
    }
    static buscar(entidade){
        return DataBase[entidade]
    }
    static buscarPorId(entidade, id){
        return DataBase[entidade][id]
    }
    static deletarPorId(entidade, id){
        delete DataBase[entidade][id]
    }
}

export default DatabaseMetodos
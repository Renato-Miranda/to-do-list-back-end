import { resolve } from "path"
import DataBase from "../database/Database.js"
import { rejects } from "assert"

class DatabaseMetodos{
    static inserir(entidade, data){
        DataBase[entidade].push(data)
    }
    static  buscar(entidade){
        const query = `
        select * from ${entidade};
        `
       return new Promise((resolve, reject)=>{
        DataBase.all(query, (error, rows) => {
            if(error){
                console.log(error);
            }else {
                resolve (rows)
            }
       }) 
        })
    }
    static buscarPorId(entidade, id){
        return DataBase[entidade][id]
    }
    static deletarPorId(entidade, id){
        delete DataBase[entidade][id]
    }
    static atualizarPorId(entidade, id, data){
        DataBase[entidade][id] = data
    }
}

export default DatabaseMetodos
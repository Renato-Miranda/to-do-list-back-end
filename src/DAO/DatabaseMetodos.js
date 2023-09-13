import { resolve } from "path"
import DataBase from "../database/Database.js"
import { rejects } from "assert"
import { log } from "console"

class DatabaseMetodos{
    static inserir(query, data){
         return new Promise((resolve, reject)=>{
            DataBase.run(query, ...data, (error)=>{
                if(error){
                    console.log(error);
                    reject(error)
                }
                resolve({error: false})
            })
         })
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
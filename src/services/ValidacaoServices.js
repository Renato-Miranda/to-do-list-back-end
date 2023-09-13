import TarefasMetodos from "../DAO/TarefasMetodos.js";
import UsuariosMetodos from "../DAO/UsuariosMetodos.js";

class ValidacaoServices {
    static validarExistencia(id) {
        const usuario = UsuariosMetodos.buscarUsuarioPorId(id)
        if (usuario) {
            return true
        } else {
            return false
        }
    }
    static validaNome(nome){
        return typeof nome == "string" && nome.length > 2
    }
    static validaEmail(email){
        return typeof email == "string" && email.length > 2
    }
    static validaTelefone(telefone){
        const telefoneInt = parseInt(telefone)
        return typeof telefone == "string" && telefone.length > 9 && telefone == telefoneInt
    }
    static validaCamposUsuario(nome, email, telefone){
        const isValid =  this.validaNome(nome) && this.validaEmail(email) && this.validaTelefone(telefone)
        return isValid 
    }
    static validarExistenciaTarefa(id) {
        const tarefa = TarefasMetodos.buscarTarefaPorId(id)
        if (tarefa) {
            return true
        } else {
            return false
        }
    }
    static validaTitulo(titulo){
        return typeof titulo == "string" && titulo.length > 2
    }
    static validaDescricao(descricao){
        return typeof descricao == "string" && descricao.length > 2
    }
    static validaData(data){
        return typeof data == "string" && data.length > 2
    }
    static validaStatus(status){
        return typeof status == Boolean
    }
    
    static validaCamposTarefa(titulo, data, descricaco, status){
        const isValid =  this.validaTitulo(titulo) && this.validaData(data) && this.validaDescricao(descricao) && this.validaStatus(status)
        return isValid 
    }
}

export default ValidacaoServices
const { listarContatos } = require("./listar")

function editarContatos(callback) {
    listarContatos()
    let numero = prompt('Digite o Numero do Contato que Deseja Editar: ')
    const index = parseInt(numero) - 1
    if (index < 0 || index >= global.contatos.length) {
        console.log('Contato Não Encontrado, Por Favor, Tente Novamente')
        editarContatos()
    } else {
        let nome = prompt('Qual o Novo Nome da Pessoa? ')
        let telefone = prompt('Qual o Novo Numero da Pessoa? ')
        let email = prompt('Qual o Novo Email da Pessoa? ')
        global.contatos[index] = {nome, telefone, email}
        console.log('Contato Atualizado com Sucesso.')
    }
    callback()
}

module.exports = {editarContatos}
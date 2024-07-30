const { listarContatos } = require("./listar")

function removerContatos(callback) {
    if (global.contatos.length == 0) {
        console.log('Não a Contatos a Serem Removidos')
        callback()
    } else {
        console.log('Lista de Contatos:')
        listarContatos()
    }
    let remover = prompt('Digite o Numero do Contato que Deseja Remover: ')
    const index = parseInt(remover) - 1
    if (index >= 0 && index < global.contatos.length) {
        global.contatos.splice(index, 1)
        console.log('Contato Removido Com Sucesse.')
    }
    callback()
}

module.exports = {removerContatos}
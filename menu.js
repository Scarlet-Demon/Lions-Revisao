const {adicionarConatos} = require('./adicionar') 
const {listarContatos} = require('./listar')
const {editarContatos} = require('./editar')
const {removerContatos} = require('./remover')

function exibirMenu() {
    console.log(`
    Bem-Vindo a sua Caixa de Contatos!!!
    1. Adicionar Contato
    2. Listar Contato
    3. Editar Contato
    4. Remover Contato
    5. Sair 
    `)
    let opçao = prompt('O que deseja: ')
    switch (opçao) {
        case '1':
            adicionarConatos(exibirMenu)
            break;
        case '2':
            listarContatos()
            exibirMenu()
            break;
        case '3':
            editarContatos(exibirMenu)
            break;
        case '4':
            removerContatos(exibirMenu)
            break;
        case '5':
            return
            break;
        default:
            console.log('Opção Invalida, Por favor, Tente Novamente')
            exibirMenu()
            break;
    }
}

module.exports = {exibirMenu}
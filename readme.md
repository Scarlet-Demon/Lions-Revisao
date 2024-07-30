# Introdução
Criamos o nosso código no `processo prompt` como solicitado pelo nosso Professor, como o `processo prompt` é parecido com o `processo readline`, como sempre declarmos a função criando primeiro a Bibliopteca do nossa Código. Em seguida criamos uma variavel com o nome de `Contatos` para armazenar as informações que seram adicionadas no terminal conforme o pedido do Usuário, depois disso tranformamos o espaço dessa variavel e o comando prompt em espaços globais para facilitar os envios de informações.
```javascript
const prompt = require('prompt-sync') ()
const {exibirMenu} = require('./menu')

let sessoes = []

global.prompt = prompt
global.constatos = contatos
```
Como sempre nas outras linhas de códigos criamos um `Menu` para fácil compreenção do usuário em relação ao código, criamos um `Switch` para a navegação das funções criadas para cada um das opções do Menu sendo elas: `adicionarContatos listarContatos editarContatos removerContatos`. As opções do Menu era essas: `Adicionar novo Listar Todas os Contatos Editar Contato Remover Conato Sair`

## Desenvolvimento
Como dito anteiormente, Criemos `Funções`, para o compreendimento do código que ao escolher uma opção do Menu ele deverá executar ela de acordo com essa escolha (é nesse caso que entra o `Switch`).

## Função Adicionar
Como diz o nome da função, ela `adicionar` um Contato no `Banco de Dados` do código (prompt), dentro desta função será feito perguntas iram salva as respectivas informações: 
`Nome da Pessoa`
`Numero da Pessoa`
`Email da Pessoa`
```javascript
function adicionarConatos(callback) {
    let nome = prompt('Qual o Nome da Pessoa? ')
    let telefone = prompt('Qual o NUmero da Pessoa? ')
    let email = prompt('Qual o Email da Pessoa? ')
    global.contatos.push({nome, telefone, email})
    console.log('Contato Adicionado com Sucesso.')
    callback()
}

module.exports = {adicionarConatos}
```
## Função Listar
Como o próprio nome diz, está função `Lista` os Contatos que já foram salvas no Bando de Dados do código(prompt)
```javascript
function listarContatos() {
    contatos.forEach(contato => {
    console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    });
}

module.exports = {listarContatos}
```
## Função Editar
Como o próprio nome diz, está função `Atualiza` os Contatosque já foram criadas pela `Função Adicionar` e refaz novas perguntas para o usuário, adicionando novas informações no código e depois fazendo as alterações no Banco de Dados (prompt), no qual o usuário pode escolher qual Contato ele deseja atualizar.
```javascript
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
```
## Função Remover
Como o diz o nome, está função `Cancela` ou `Remove` ás Contatos que foram criadas pela `Função Adicionar` do Banco de Dados (prompt), no qual o usuário pode escolher qual Contato ele deseja remover.
```javascript
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
```
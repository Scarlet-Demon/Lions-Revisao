function adicionarConatos(callback) {
    let nome = prompt('Qual o Nome da Pessoa? ')
    let telefone = prompt('Qual o NUmero da Pessoa? ')
    let email = prompt('Qual o Email da Pessoa? ')
    global.contatos.push({nome, telefone, email})
    console.log('Contato Adicionado com Sucesso.')
    callback()
}

module.exports = {adicionarConatos}
const prompt = require('prompt-sync') ()
const {exibirMenu} = require('./menu')

let contatos = []

global.prompt = prompt
global.contatos = contatos

exibirMenu()
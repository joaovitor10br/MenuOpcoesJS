let teclado = require('prompt-sync')()

let n1 = parseInt(teclado('Digite um numero: '))
let n2 = parseInt(teclado('Digite outro numero: '))
let menu = 0

while(menu != 5) {
    console.log('Menu de opções')

    console.log('[1]-Soma')
    console.log('[2]-Subtração')
    console.log('[3]-Divisão')
    console.log('[4]-Multiplicação')
    console.log('[5]-Sair')

    menu = parseInt(teclado('Digite um numero entre 1 e 5: '))

    if (menu == 1) {
        console.log('Soma')
        let soma = n1 + n2
        console.log(`A soma dos dois numeros é: ${soma}`)
    }
    else if (menu == 2) {
        console.log('Subtração')
        let subtracao = n1 - n2
        console.log(`A subtração dos dois numeros é: ${subtracao}`)
    }
    else if (menu == 3) {
        console.log('Divisão')
        let divisao = n1 / n2
        console.log(`A divisão dos dois numeros é: ${divisao}`)
    }
    else if (menu == 4) {
        console.log('Multiplicação')
        let multiplicacao = n1 * n2
        console.log(`A multiplicação dos dois numeros é: ${multiplicacao}`)
    }
    else if (menu == 5) {
        console.log('Finalizando...')
    }
    else {
        console.log('Opção inválida! Por favor digite novamente')
    }
}
console.log('Programa finalizado')

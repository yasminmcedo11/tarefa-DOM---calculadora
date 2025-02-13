let secao = document.querySelector(".respostas")
let notas = []
let contador = 1

function lerNota() {
    try {
        let inputNotas = document.querySelector("#nota")
        // Tratamento de Erros
        if ((inputNotas.value).trim() == "") { // tratando casos onde não foi inserido nenhum valor no campo
            throw new Error("Por Favor, insira uma nota.");
        } // tratando casos onde o input não é um número
        else if (isNaN(Number(inputNotas.value))) {
            throw new Error("A nota digitada é inválida, por favor, insira uma nota válida.")
        } // tratando casos onde o input é um número que não pertence ao intervalo permitido (0,10)
        else if (Number(inputNotas.value) < 0 || Number(inputNotas.value) > 10) {
            throw new Error("A nota digitada é inválida, por favor, insira uma nota válida.")
        } 
        else {
            return inputNotas
        }
    } catch (error){
        alert(error.message)
    }
    
}

function adicionarNota(event) {
    event.preventDefault() //para página não recarregar

    let inputNota = lerNota()
    inputNota.value = (inputNota.value).trim()
    notas.push(Number(inputNota.value)) //salvando a nota no array de notas

    let nota = document.createElement("p")
    nota.classList.add("resposta")
    nota.innerText = `A nota ${contador} foi ${inputNota.value}`

    secao.append(nota)

    inputNota.value = "" // limpando as caixas de forms
    contador++ // atualizando a variável contador
}

function calcularMedia(event) {
    event.preventDefault()

    let soma = notas.reduce((acc, valorAtual) => acc + valorAtual ,0) //calculando a soma das notas
    let media = soma/notas.length //calculando a média
    media = media.toFixed(2) //fixando 2 casas decimais

    let secaoResultado = document.querySelector(".media")
    secaoResultado.innerText = `A média é: ${media}`
}


let btn_enviar = document.querySelector("#btn_enviar")
btn_enviar.addEventListener("click", ()=>{adicionarNota(event)})

let btn_media = document.querySelector("#btn_media")
btn_media.addEventListener("click", ()=> {calcularMedia(event)})
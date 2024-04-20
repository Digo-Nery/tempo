let chave = "07c49bc0f1f750e9c0f8f2657e821cd9"

function colocarNatela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector('.nuvem').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML ="Umidade em " + Math.floor ( dados.main.humidity)  + "%"
}

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=07c49bc0f1f750e9c0f8f2657e821cd9&units=metric").then(resposta => resposta.json())
    /*await = espere 
    fetch = uma ferramenta para acessar um servidor 
    THEN = então*/
    //json = javascript object natation ( o formato que o  javascript entende )
    colocarNatela(dados)
}
function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)

}

//console.logo colocar inf na tela

//Cliquei no botão 
/*-> chama a função cliqueiNoBotão
-> vai no input e pega o que esta lá dentro 
-> passar a cidade para o servidor 
innerHTML ="altera o que tem dentro dele" 
math.floor -> Ferramenta do javaScript para arredondar valores 
*/
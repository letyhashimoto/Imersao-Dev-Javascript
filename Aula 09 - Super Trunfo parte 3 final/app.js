var cartaSailorMoon = {
    nome: "Sailor Moon",
    imagem: "https://i.imgur.com/p0fgLuf.jpg",
    atributos: {
        ataque: 95,
        defesa: 50,
        magia: 100
    }
}

var cartaSailorMercury = {
    nome: "Sailor Mercury",
    imagem: "https://i.imgur.com/BJiuSB7.jpg",
    atributos: {
        ataque: 80,
        defesa: 30,
        magia: 60
    }
}

var cartaSailorVenus = {
    nome: "Sailor Venus",
    imagem: "https://i.imgur.com/YAt2zkd.jpg",
    atributos: {
        ataque: 75,
        defesa: 40,
        magia: 100
    }
}

var cartaSailorMars = {
    nome: "Sailor Mars",
    imagem: "https://i.imgur.com/TQdI0B8.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

var cartaSailorJupiter = {
    nome: "Sailor Jupiter",
    imagem: "https://i.imgur.com/49ASBmN.jpg",
    atributos: {
        ataque: 85,
        defesa: 30,
        magia: 20
    }
}

var cartaTuxedoMask = {
    nome: "Tuxedo Mask",
    imagem: "https://i.imgur.com/G5c07bV.jpg",
    atributos: {
        ataque: 99,
        defesa: 50,
        magia: 98
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaSailorMoon, cartaSailorMercury, cartaSailorVenus, cartaSailorMars, cartaSailorJupiter, cartaTuxedoMask]
//            0                     1               2                 3                 4                     5

var pontosJogador = 0 
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById('quantidade-cartas') 
  var html = "Quantidade de cartas no jogo: " + cartas.length 
  
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  
  divPlacar.innerHTML = html
}

function sortearCarta() {
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)
  
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)        

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  
  if(cartas.length == 0) {
    alert("Fim de Jogo")
    if(pontosJogador > pontosMaquina){
      htmlResultado = '<p class="resultado-final">Venceu</p>'
    } else if (pontosMaquina > pontosJogador) {
      htmlResultado = '<p class="resultado-final">Perdeu</p>'
    } else{
      htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  } else {
    document.getElementById('btnProximaRodada').disabled = false
  }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
              
    atualizaPlacar()  
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
    
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  document.getElementById('btnSortear').disabled = false 
  document.getElementById('btnJogar').disabled = true 
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""  
}

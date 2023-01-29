var numeroDigitado = document.getElementById('board-size')
var mt = document.getElementsByClassName('color')
var paletaArray = document.getElementsByClassName('color')
    

// inserindo as cores dinâmicamente na paleta de cores
for (var t = 0; t < mt.length; t++) {
    const inserirColor = mt[t];
    if (t == 0) {
        inserirColor.style.backgroundColor = 'rgb(0,0,0)';
    } else if (t == 1) {
        inserirColor.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    } else if (t == 2) {
        inserirColor.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    } else {
        inserirColor.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    }
}

// criação dinâmica das divis
function criacaoDivs(tamanho){
    var vezes = (tamanho * tamanho)
    for (let x = 0; x < vezes ; x += 1) {
        var d1 = document.createElement("div");
        d1.setAttribute('class', 'pixel');
        document.getElementById('pixel-board').appendChild(d1);
    }
}
criacaoDivs(5)

function selecionarCor(event) {
    var classeSelected = document.getElementsByClassName('selected')[0]
    classeSelected.classList.toggle ('selected') 
    var cor = event.target //pesquisar esse diacho de event
    cor.classList.toggle ('selected') 
    var corAtual = cor.style.backgroundColor
    atual = corAtual  //tive que colocar mais uma variavel para pegar o valor do background que pelo logo aparecia mas se fosse verificar a variavel constava como não definida
}

//** */ ao carregar a pagina a cor preta deve estar selecionada e conter inicialmente a classe 'selected' e somente ela
const tclasse = document.getElementsByClassName('selected')[0];
corB = tclasse.style.backgroundColor

//**pintar o quadro de pixels com a cor selecionada
function selecionarBoard(event) {
            var pintar = event.target
            pintar.style.backgroundColor = corB
        if(atual != ''){
            var pintar = event.target
            pintar.style.backgroundColor = atual
        }
    }

// colocando o ouvinte  nas classes do board com for
var pixelBoard = document.getElementsByClassName('pixel')
for (let ouvintePixel = 0; ouvintePixel < pixelBoard.length; ouvintePixel += 1) {
    const addOuvinteP = pixelBoard[ouvintePixel];
    addOuvinteP.addEventListener('click', selecionarBoard)
}

// colocando o ouvinte  nas classes da paleta com for
for (let ouvinteColor = 0; ouvinteColor < paletaArray.length; ouvinteColor += 1) {
    const addOuvinte = paletaArray[ouvinteColor];
    addOuvinte.addEventListener('click', selecionarCor)
}

//**selecionar outra cor da paleta ao mesmo tempo que a classe selected é removida e adcionada na nova cor 
//**botão limpar id ='clear-board' com texto 'Limpar', limpa totalmente o quadro de pixels

function l (){
    var limparPixel = document.getElementsByClassName('pixel')
    for (var t = 0; t < limparPixel.length; t+=1) {
    const lPixel = limparPixel[t];
    lPixel.style.backgroundColor = 'rgb(255,255,255)';
    
    }
}

var botao = document.getElementById('clear-board').addEventListener('click', l)

//**criar um input para o usuario escolher o tamanho do quadro de pintura tamanho entre 5 e 50, input deve conter id ='board-size' o novo quadro deve conter o preencimento branco, o botão deve conter o id = 'generate-board'e o nome "VQV", o input deve receber valores maiores que 0 condição devera estar nos atributos do elemento input,o input devera estar posicionado entre a paleta de cores e o quadro de pixels o botão devera estar posicionado ao lado do input, valor não digitado retorna um alert "Board inválido"
//**caso o usuario digite < que 5 considerar 5 padrao
//caso o usuario digite > que 50 considerar 50 padrão

var tamanhoQuadro = document.getElementById('generate-board')
var ePai = document.getElementById('pixel-board')

function resize (){
    //var removeArray = document.getElementsByClassName('pixel')
        // criação dinâmica das divis
    if(numeroDigitado.value ==''){
        alert('ERRO')
        // numeroDigitado.value = 5
    }else{ 
        if (numeroDigitado.value < 5 ) {
            numeroDigitado.value = 5
        }else if (numeroDigitado.value > 50){
            numeroDigitado.value = 50
        }
        while (ePai.firstChild) {
            ePai.removeChild(ePai.firstChild);  
        }
        criacaoDivs(numeroDigitado.value)
        var pixelBoard = document.getElementsByClassName('pixel')
        for (let ouvintePixel = 0; ouvintePixel < pixelBoard.length; ouvintePixel += 1){
        const addOuvinteP = pixelBoard[ouvintePixel];
        addOuvinteP.addEventListener('click', selecionarBoard)
        }
// Configuração css das divs pelo js
        var t = document.getElementById('pixel-board');
        var tamanhoBoardCss = numeroDigitado.value * 42
        t.style.maxWidth = `${tamanhoBoardCss}px`
        }
}
tamanhoQuadro.addEventListener('click', resize)

// Configuração css das divs pelo js
var t = document.getElementById('pixel-board');
t.style.maxWidth = '210px'

//**carregar as cores da paleta aleatóriamente ao carregar a pagina

//add ou remover classes pelo js
// var tclasse = document.getElementsByClassName('color')[0];
// tclasse.classList.toggle ('selected')//add ou remover quando não tem classe
// tclasse.hasClass('selected') //verificar se a classe existe(nãofuncionou)
// tclasse.classList.remove ('selected') // remove class
// tclasse.classList.add('selected') //add class
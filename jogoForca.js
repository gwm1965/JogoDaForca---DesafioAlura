var word = ["ALURA", "ORACLE", "FORCA", "HTML", "JAVASCRIPT", "LOGICA"];
var tabuleiro = document.getElementById('forca').getContext('2d');
var palavraSecreta = "";
var novaPalavra = "";

let letras = []
let erros = 8



function escolherPalavraSecreta() {
    let palavra = word[Math.floor(Math.random() * word.length)]
    palavraSecreta = palavra
    console.log(palavraSecreta)
}

//captar a tecla digitada
//verificar se é uma letra
//saber se a palavra secreta inclui a letra digitada
//escrever a letra correta
//escrever a letra incorreta
//contar erros

//live2 10:51
function verificarLetra(key){
    let estado = false
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){   
    letras.push(key)
    console.log(key)
    console.log(letras, 'if false')
    return estado
    }
    else{
        estado = true
        letras.push(key)
        console.log(key)
        console.log(letras, 'if true')
        return estado
    }
    
}

function adcionarLetraIncorreta(){
    erros -= 1
    
}

function mostraErros(){
    alert(erros);
}


function adicionarNovaPalavra() {
    document.getElementById('div-desaparece').style.display = 'none';


}




function iniciarJogo(){
    document.getElementById('div-desaparece').style.display = 'none';

    escolherPalavraSecreta()
    desenharCanvas()
    desenharLinhas()

    document.onkeydown = (e) =>{
        let letra = e.key.toUpperCase()
        if (verificarLetra(letra) && palavraSecreta.includes(letra)) {
            for(let i = 0; i < palavraSecreta.length; i++) {
                if(palavraSecreta[i] === letra){
                    escreverLetraCorreta(i)
                }
            }

        }else{
            adcionarLetraIncorreta(letra)
            escreverLetraIncorreta(letra, erros)
            mostraErros()*
            desenhaForca()
            
        } 
    }
    
    } 
    

function desenharCanvas(){
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    //manipulação
tabuleiro.fillRect(0, 0, 1200, 800);
tabuleiro.beginPath();
tabuleiro.moveTo(900, 500);
tabuleiro.lineTo(650, 500);
tabuleiro.stroke();
tabuleiro.closePath();

}

function desenharLinhas(){
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = 'round';
    tabuleiro.lineJoin = 'round';
    tabuleiro.fillStyle = '#F3F5FC';
    tabuleiro.strokeStyle = '#0A3871';

    let largura = 600 / palavraSecreta.length
    for(let i = 0; i < palavraSecreta.length; i++) {
        tabuleiro.moveTo(500 + (largura * i), 640)
        tabuleiro.lineTo(550 + (largura * i), 640)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()

}

function escreverLetraCorreta(index) {
    tabuleiro.font = "bold 52px Inter"
    tabuleiro.linecap = "round"    
    tabuleiro.fillStyle = "#0A3871"
    tabuleiro.lineWidth = 6
    let largura = 600 / palavraSecreta.length
    tabuleiro.fillText(palavraSecreta[index], 500 + (largura * index), 630)

}

function escreverLetraIncorreta(letra, erros){
    tabuleiro.font = "bold 52px Inter"
    tabuleiro.linecap = "round"    
    tabuleiro.fillStyle = "#0A3871"
    tabuleiro.lineWidth = 6
    tabuleiro.fillText(letra, 520 + (40 * (10 - erros)), 720, 40)

}

function desenhaForca(){    

    switch (erros) {
        case 7:
            tabuleiro.lineWidth = 8;
            tabuleiro.beginPath();
            tabuleiro.moveTo(650, 500);
            tabuleiro.lineTo(650, 200);
            tabuleiro.stroke();
            break;

        case 6:
            tabuleiro.lineWidth = 8;
            tabuleiro.beginPath();
            tabuleiro.moveTo(650, 200);
            tabuleiro.lineTo(850, 200);
            tabuleiro.stroke();
            break;

        case 5:
            tabuleiro.lineWidth = 8;
            tabuleiro.beginPath();
            tabuleiro.moveTo(850, 200);
            tabuleiro.lineTo(850, 250);
            tabuleiro.stroke();
            tabuleiro.lineWidth = 8;
            tabuleiro.beginPath();
            tabuleiro.arc(850, 285, 30, 0, 2* Math.PI);
            tabuleiro.stroke();
                break;
        case 4:
            tabuleiro.lineWidth = 8;
            tabuleiro.beginPath();
            tabuleiro.moveTo(850, 320);
            tabuleiro.lineTo(850, 430);
            tabuleiro.stroke();
                break;

        case 3:
            tabuleiro.lineWidth = 8;
            tabuleiro.beginPath();
            tabuleiro.moveTo(850, 340);
            tabuleiro.lineTo(800, 380);
            tabuleiro.stroke();
                break;

        case 2:
            tabuleiro.lineWidth = 8;
            tabuleiro.beginPath();
            tabuleiro.moveTo(850, 340);
            tabuleiro.lineTo(900, 380);
            tabuleiro.stroke();
                break;

        case 1:
            tabuleiro.lineWidth = 8;
            tabuleiro.beginPath();
            tabuleiro.moveTo(850, 430);
            tabuleiro.lineTo(820, 460);
            tabuleiro.stroke();
                break;

        case 0:
            tabuleiro.lineWidth = 8;
            tabuleiro.beginPath();
            tabuleiro.moveTo(850, 430);
            tabuleiro.lineTo(880, 460);
            tabuleiro.stroke();
                break;









    }
    

}
function cenaDeMorte(){
    container1.style.display="none";
    container2.classList.toggle("hide");

    let segundos=0;

    efeitosDeSom[1].play();

   const intervalo = setInterval(()=>{
    segundos++;
    if(segundos===0){
        container2.textContent="❤️";
    }
    if(segundos===2){
        container2.textContent="💔";
    }
    if(segundos===3){
        reiniciar();
        container2.classList.toggle("hide");
        clearInterval(intervalo);
    }
    },1000)
}
function cenaDeVitoria(){
    document.querySelector("body").style.opacity="0%";
    let segundos = 0;
    efeitosDeSom[2].play();
    const intervalo = setInterval(()=>{
        segundos++;

        if(segundos===5){
            reiniciar();
            document.querySelector("body").style.opacity="100%";
            clearInterval(intervalo);
        }
    }
    ,1000);
}

function reiniciar(){
//definindo título padrão
titulo.textContent="WordTale";
//devolvendo vida
vida=6;
//gerando número de tema denovo
numeroAleatorioParaTema = gerarNumeroAleatório(4)+1;
palavra="";
//gerando nova palavra
escolherTemaPalavra();
 letras = palavra.split("");
 misterio = "";
 tracos="";

temaOutPut.textContent =`Tema: ${nomeDoTema}`;
//reconstruindo o boneco
membros.forEach(membro=>{
    membro.style.opacity="100%";
})
//reconfigurando as nova janela
container1.style.display="grid";


//limpando letras da lista negra
contador=0;
letrasUsadas.textContent="";
for(let i=0;i<usadas.length;i++){
    usadas[i]=null;
}
palavraSecreta.textContent="";

gerarTracos();
misterio = misterio.split("");

}
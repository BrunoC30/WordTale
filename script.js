//variariaveis de elementos
const inputLetra = document.querySelector("#receberLetra");
const sub = document.querySelector("#submit");
const palavraSecreta = document.querySelector("#palavraSecreta");
const letrasUsadas = document.querySelector("#letrasUsadas");
const titulo = document.querySelector(".title h1");
const temaOutPut = document.querySelector("#tema");

//número aleatório
const gerarNumeroAleatório = (max)=>{
  return  Math.floor(Math.random()*max);
} 

//temas
const temasDepalavras = {
    animais:["cachorro","lobo","gato","porco"],
    frutas:["banana","maracuja","laranja","abacaxi"],
    humor:["triteza","alegria","raiva","paixao","medo"],
    filmes:["corra"]
}
let numeroAleatorioParaTema = gerarNumeroAleatório(4)+1;
let palavra = "";
let tema="";
let nomeDoTema="";



const escolherTemaPalavra = ()=>{
    //escolha do tema
    switch(numeroAleatorioParaTema){
        case 1:
        tema = temasDepalavras.animais;
        nomeDoTema="animais";
        break;
        case 2:  
        tema = temasDepalavras.frutas;
        nomeDoTema="frutas";
        break;
        case 3:
        tema = temasDepalavras.humor;
        nomeDoTema ="humor";
        break;
        case 4:
        tema = temasDepalavras.filmes;
        nomeDoTema="filmes";
        break;
    }
    palavra = tema[gerarNumeroAleatório(tema.length)];

}

escolherTemaPalavra();
temaOutPut.textContent =`Tema: ${nomeDoTema}`;
//renderização das letras
let letras = palavra.split("");
let misterio = ""
let tracos="";

//lógica de letras já usadas
let usadas = new Array(26);
let contador= 0;
const anotarLetrasErradas = ()=>{
    usadas[contador]= inputLetra.value;
    letrasUsadas.textContent+=`${inputLetra.value.toUpperCase()},`;
    contador++;
}


// traços gráficos para representar o numero de palavras
for(let i=0; i<palavra.length;i++){
    //array misterio para ser comparado
    misterio+="_";
    //apenas ilustração
    tracos+="_ ";
    palavraSecreta.textContent=tracos;
}

misterio = misterio.split("");

const substituirLetra = ()=>{
    for(let i=0;i<letras.length;i++){
        //se palavra contem as mesmas letras do input será atualizada
        if(letras[i]===inputLetra.value.toLowerCase()){
            misterio[i]=inputLetra.value.toLowerCase();
        }
        tracos="";
        for(let i =0;i<misterio.length; i++){
            //adiciona espaçamento para melhor vizualização
            tracos+= misterio[i]+" ";
        }
        palavraSecreta.textContent= tracos;
    }
}

//variáveis do personagem
let vida = 6;
const membros = document.querySelectorAll(".dummy");
const membrosSumindo = ()=>{
    membros[vida].style.opacity="0%";
}



inputLetra.addEventListener("input",()=>{
    //passar as letras para maiúsculo
    inputLetra.value= inputLetra.value.toUpperCase();
    
    for(let i=0;i<usadas.length;i++){
        if(inputLetra.value===usadas[i]){
            inputLetra.value="";
        }
    }
})

sub.addEventListener("click", ()=>{
    if(!(palavra.includes(inputLetra.value.toLowerCase()))){
        vida--;
        membrosSumindo();
        anotarLetrasErradas();
    } else{
        substituirLetra();
    }
    console.log(tracos);
    inputLetra.value="";
    
    if(vida===0){
        titulo.textContent="You Lost";
    } else if(palavra===misterio.join("")){
        titulo.textContent="You Win";
    }
})

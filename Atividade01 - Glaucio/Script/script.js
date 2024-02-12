var cadastroBtn = document.querySelector("#cadastro-btn"); //seletor do cadastro
var calculoBtn = document.querySelector("#calcular-btn"); //seletor de calculo
var dadoAlturas = document.querySelector("#M-Alturas");
const numPessoas = document.querySelector('#num-pessoas');
var media = documen.querySelector("#Media-Homem");

//Criação de Variáveis
var count = 0;
var allSexo = [];
var alltura = [];
const limite = 15;
var pessoa = [];

//função para pegar valores dos inputs
function pegarValores() {
    const sexinp = document.querySelector('#Sexo');
    const altinp = document.querySelector('#Altura');
    const sexo = sexinp.value;
    const altura = altinp.value;

    allSexo.push(sexo);
    alltura.push(altura);

    

}


//Função para cadastrar pessoas
cadastroBtn.addEventListener('click', function cadastrar() {
    pegarValores();
   
    
    
    count++;
    numPessoas.innerHTML = `Pessoas Cadastradas: ${count}`;
    limitador();

    console.log(alltura);
    console.log(allSexo);
   
});


//limitador de pessoas cadastradas
function limitador() {
    if (allSexo.length > limite && alltura.length > limite) {
        allSexo.length = limite;
        alltura.length = limite;
        count--;
        alert('Limite de pessoas cadastradas (15)')
        numPessoas.innerHTML = 'Pessoas cadastradas: 15';
    }
}


const maiorAltura = Math.max(...alltura).toFixed(2);

//calculos de dados
calculoBtn.addEventListener("click", function calcular() {
    
    var maiorAltura = Math.max(...alltura).toFixed(2);
    var menorAltura = Math.min(...alltura).toFixed(2);

    dadoAlturas.innerHTML = `A maior altura é: ${maiorAltura} e a menor altura é: ${menorAltura}`;
    

    for (var i = 0; i < Math.min(allSexo.length, alltura.length); i++) {
        pessoa.push([alltura[i], allSexo[i]]);
    }

    
    
})



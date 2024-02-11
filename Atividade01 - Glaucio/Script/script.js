var cadastroBtn = document.querySelector("#cadastro-btn"); //seletor do botão

//Criação de Variáveis
var count = 0;
var allSexo = [];
var alltura = [];
const limite = 15;

//função para pegar valores dos inputs
function pegarValores() {
    const sexinp = document.querySelector('#Sexo');
    const altinp = document.querySelector('#Altura');
    const sexo = sexinp.value;
    const altura = altinp.value;

    allSexo.push(sexo);
    alltura.push(altura);

    console.log(alltura);

}


//Função para cadastrar pessoas
cadastroBtn.addEventListener('click', function cadastrar() {
    pegarValores();
    
    const numPessoas = document.querySelector('#num-pessoas');
    count++;
    numPessoas.innerHTML = `Pessoas Cadastradas: ${count}`;

    if (allSexo.length > 15) {
        allSexo.splice(15);
    }

    if (count == limite) {
        alert('Limite de Pessoas Cadastradas (15)')
        limitador();
            
    } else if (count > limite) {
            cadastroBtn = cadastroBtn.addEventListener('click', function cadastrar() {
            alert('Limite de Pessoas cadastradas (15)');
            numPessoas.innerHTML = `Pessoas Cadastradas: 15`;
            limitador();
        })
    }

});


//limitador de pessoas cadastradas(problema)
function limitador() {
    if (allSexo.length > limite && alltura.length > limite) {
        allSexo.splice(limite);
        alltura.splice(limite);
    }
}
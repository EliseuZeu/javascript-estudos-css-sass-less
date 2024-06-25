/*//Variavel 
var termo = "Proway";

//exibindo quantidade de caracteres
alert(termo.length);

//letra maiuscula
alert(termo.toLocaleUpperCase());
//letra minuscula
alert(termo.toLocaleLowerCase());

//Retorna a primeira letra P

alert(termo.indexOf("P"));

//retorna a ultima letra Y
alert(termo.lastIndexOf("Y"));

//Extrair 
alert(termo.slice(3));

alert(termo.slice(3,5))

*/

//criando funções

//Somar 2 valores
/*function somar(num1, num2) {
    num1 = 20;
    num2 = 50;

    soma = num1 + num2;

    return soma;
}

alert(somar());

*/

//Criando eventos 

function mensagem(){
    var curso = document.getElementById("cursos").value;

    //exibir o curso selecionado
    alert(curso);
}

function exibirdown(){
    var campo = document.getElementById("campo2").value;

    alert(campo);
}

function exibirpress(){
    var campo = document.getElementById("campo3").value;

    alert(campo);
}


/*function exibir(){
    var campo = document.getElementById("campo").value;

    alert(campo);
}  */



 //exempplos de keyload - onKeyUp: Exxibe um caracteres 
 //                       oneKeyDonw: Executa ação depo exibi
 //                       oneKeyPress: Executa a ação e depois exibe o caracter


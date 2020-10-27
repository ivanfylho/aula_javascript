
/*
var nome = "Ivan Filho";
var idade = 32
var idade2 = 10
//alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
*/

//var lista =["maçã", "pêra", "laranja"];
//console.log(lista);
//lista.push("uva"); //push acrescenta um item na lista
//lista.pop("laranja") //pop retira um item da lista
//console.log(lista.length); //length mostra quantidade de itens na lista
//alert(lista);
//console.log(lista.join(" - ")); //join coloca - no lugar de ,

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome)
alert(fruta.cor)
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor);
*/
/*
var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    //count = count + 1;
    count++;
}
*/

/*
var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/

//var d = new Date();
//alert(d);

/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}


alert(soma(5,10));
alert(setReplace("Vai Japão!", "Japão", "Brasil"));
*/

/*function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade));
*/

function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
 //   conseole.log(document.getElementById("agradecimento"));
}
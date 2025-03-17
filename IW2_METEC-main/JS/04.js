// criar função javascript 

// 1º função nomeada

let numero01 =document.getElementById("n_01");
let totalp = document.getElementsByTagName("p");
function PegarNumero( ){
    // DOM (Documento de Objeto Modelo)
 
     numero01.style.color="#ffdd8c";
     numero01.style.border =" 1px solid black";
     numero01.style.backgroundColor ="green"; 
     let total = eval(numero01.value);
     //alert (total);
     //console.log(numero01.value);
     totalp[0].innerText = total

}

// arrow function

 const Adicao=()=>{
    // numero01.value = numero01.value + "+";
    numero01.value = numero01.value += "+";

    alert(numero01.value);

 }
 const Sub=()=>{
    // numero01.value = numero01.value + "+";
    numero01.value = numero01.value += "-";

    alert(numero01.value);

 }

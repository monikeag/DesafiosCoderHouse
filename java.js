/*let nome = document.createElement("h1");

nome.innerText = "Monique"

document.body.append(nome);


let sobrenome = document.getElementById("h2");
sobrenome.remove();*/


 var resp = document.getElementById('resp');
 var num1 = parseFloat(document.getElementById("num1").value);
 var num2 = parseFloat(document.getElementById("num2").value);
 var texto='';

 if(document.getElementById('btnsoma').checked)
  texto = soma(num1, num2);
 if(document.getElementById('btnsubtracao').checked)
  texto = subtracao(num1, num2);
 if(document.getElementById('btnmultiplicacao').checked)
  texto = multiplicacao(num1, num2);
 if(document.getElementById('btndivisao').checked)
  texto = divisao(num1, num2);

 let resp = document.getElementById("resp");

 function soma(){
    let respSoma = parseFloat(num1.value) + parseFloat(nun2.value);
    resp.innerText = respSoma;
 };

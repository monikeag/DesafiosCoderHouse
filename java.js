/*let nome = document.createElement("h1");

nome.innerText = "Monique"

document.body.append(nome);


let sobrenome = document.getElementById("h2");
sobrenome.remove();*/
function main()
{
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

 resp.innerHTML = texto;
}

function soma(x, y)
{
  
  return (x+y);
}

function subtracao(x, y)
{
  
  return (x-y);
}

function multiplicacao(x, y)
{
  
  return (x*y);
}

function divisao(x, y)
{
  
  return (x/y);
}
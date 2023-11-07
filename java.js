function buscarBandeira() {
  
   let paisDigitado = document.getElementById("paisDigitado")

   let url = 'https://restcountries.com/v3.1/name/' + paisDigitado.value;

   fetch(url)
       .then(response => response.json())
       .then(response => exibirPais(response))
}

function exibirPais(pais) {

   let divImg = document.getElementById("bandeira")

   divImg.innerText = ""

   let bandeira = document.createElement("img")
   bandeira.src = pais[0].flags.png

   divImg.append(bandeira)
}
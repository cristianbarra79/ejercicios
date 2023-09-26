let btnconvertir = document.querySelector("#convertir");
let salida = document.querySelector("#salida");

btnconvertir.addEventListener("click", (e) => {
  let binario = [];
  const numero = document.querySelector("#numero");
  let valor = numero.value;
  while (valor > 1) {
    binario.push(valor % 2);
    valor = Math.floor(valor / 2);
  }
  binario.push(valor);
  const reversed = binario.reverse();
  //   reversed.toString()
  salida.innerHTML = reversed.join("");
  console.log(binario, valor);
});

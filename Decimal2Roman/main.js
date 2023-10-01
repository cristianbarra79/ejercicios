let romano = document.getElementById("romano");
let btnconvertir = document.querySelector("#convertir");
let salida = document.querySelector("#salida");

const convertir = (numero) => {
  let total = numero;
  let romanoOL = "";
  let romano = "";

  if (total >= 4000) {
    while (total > 4000) {
      switch (true) {
        case total > 1000000:
          romanoOL += "M";
          total = total - 1000000;
          break;
        case total > 900000 && total < 1000000:
          romanoOL += "CM";
          total = total - 900000;
          break;
        case total >= 500000 && total < 900000:
          romanoOL += "D";
          total = total - 500000;
          break;
        case total >= 400000 && total < 500000:
          romanoOL += "CD";
          total = total - 400000;
          break;
        case total >= 100000 && total < 400000:
          romanoOL += "C";
          total = total - 100000;
          break;
        case total >= 90000 && total < 100000:
          romanoOL += "XC";
          total = total - 90000;
          break;
        case total >= 50000 && total < 90000:
          romanoOL += "L";
          total = total - 50000;
          break;
        case total >= 40000 && total < 50000:
          romanoOL += "XL";
          total = total - 40000;
          break;
        case total >= 10000 && total < 40000:
          romanoOL += "X";
          total = total - 10000;
          break;
        case total >= 9000 && total < 10000:
          romanoOL += "IX";
          total = total - 9000;
          break;
        case total >= 5000 && total < 9000:
          romanoOL += "V";
          total = total - 5000;
          break;
        case total >= 4000 && total < 5000:
          romanoOL += "IV";
          total = total - 4000;
          break;
      }
    }
  }

  while (total > 0) {
    switch (true) {
      case total > 1000:
        romano += "M";
        total = total - 1000;
        break;
      case total > 900 && total < 1000:
        romano += "CM";
        total = total - 900;
        break;
      case total >= 500 && total < 900:
        romano += "D";
        total = total - 500;
        break;
      case total >= 400 && total < 500:
        romano += "CD";
        total = total - 400;
        break;
      case total >= 100 && total < 400:
        romano += "C";
        total = total - 100;
        break;
      case total >= 90 && total < 100:
        romano += "XC";
        total = total - 90;
        break;
      case total >= 50 && total < 90:
        romano += "L";
        total = total - 50;
        break;
      case total >= 40 && total < 50:
        romano += "XL";
        total = total - 40;
        break;
      case total >= 10 && total < 40:
        romano += "X";
        total = total - 10;
        break;
      case total == 9:
        romano += "IX";
        total = total - 9;
        break;
      case total >= 5 && total < 9:
        romano += "V";
        total = total - 5;
        break;
      case total == 4:
        romano += "IV";
        total = total - 4;
        break;
      case total < 4:
        romano += "I";
        total = total - 1;
        break;
    }
  }
  return { romano: romano, romanoOL: romanoOL };
};

btnconvertir.addEventListener("click", (e) => {
  try {
    document.querySelector("#overline").remove();
  } catch (error) {}
  const numero = document.querySelector("#numero");
  const convertido = convertir(numero.value);

  if (convertido.romanoOL.length > 0) {
    let romano = document.getElementById("romano");
    let v = document.createElement("span");
    v.setAttribute("id", "overline");
    v.style.textDecoration = "overline";
    v.innerHTML = convertido.romanoOL;
    romano.prepend(v);
  }
  salida.innerHTML = convertido.romano;
});

const key = "ca7ce46c759e051101f4b8761101c131";

const clima = () => {
  let ciudad = document.getElementById("ciudad").value;

  let URLGET = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&lang=es`;
  fetch(URLGET)
    .then((response) => response.json())
    .then(function (response) {
      if (response.cod == 200) {
        let tiempo = response;
        let temperaturaCompleta = parseInt(tiempo.main.temp) - 273.15;
        let temperatura = temperaturaCompleta.toFixed(1);
        let icono = `http://openweathermap.org/img/wn/${tiempo.weather[0].icon}@2x.png`;
        let card = document.getElementById("card");
        card.innerHTML = `
            <div class="card">
              <h3 >${tiempo.name}</h3>
              <img src="${icono}" alt="imagen de clima">
              <p>${tiempo.weather[0].description}</p>
              <p >Temperatura: ${temperatura}</p>
            </div>
            `;
      } else {
        alert("No existe ciudad");
      }
    });
};

document.querySelector("#buscar").addEventListener("click", clima);

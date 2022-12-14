const URL_MONTEVIDEO = "https://api.openweathermap.org/data/2.5/weather?q=";
const URL_PART2 = ",uy&appid=aa56fcdffb2a6f5b543ed4f9b3029c5d";
let search = document.getElementById("buscar");
let ApiArray = [];

function showData(API, Array2) {
  let style = "";
  for (let item of Array2) {
    style += `
    <div class="card" style="width: 200px;">
    <h5 class="title">${API.name} ${API.sys.country}</h5>
    <img src="https://openweathermap.org/img/w/${
      item.icon
    }.png" class="card-img-top" alt="Icon weather">
  <div class="card-body">
  <p>${item.description} </p>
  <p>Temperatura: ${(API.main.temp - 273.15).toFixed(0) + "º" + "C"}</p>
  <p>Sensación térmica: ${
    (API.main.feels_like - 273.15).toFixed(0) + "º" + "C"
  }</p>
  <p>Min: ${(API.main.temp_min - 273.15).toFixed(0) + "º" + "C"}</p>
  <p>Max: ${(API.main.temp_max - 273.15).toFixed(0) + "º" + "C"}</p>
  <p>Humedad: ${API.main.humidity}%</p>
  </div>
</div>`;
  }
  document.getElementById("ShowData").innerHTML = style;
}

document.addEventListener("DOMContentLoaded", function () {
  getJSONData(URL_MONTEVIDEO + "montevideo" + URL_PART2).then(function (
    resultado
  ) {
    if (resultado.status === "ok") {
      ApiArray = resultado.data;
      Array2 = resultado.data.weather;
      showData(ApiArray, Array2);
    }
  });
  document.getElementById("btn-buscar").addEventListener("click", function () {
    getJSONData(URL_MONTEVIDEO + search.value + URL_PART2).then(function (
      resultado
    ) {
      if (resultado.status === "ok") {
        ApiArray = resultado.data;
        Array2 = resultado.data.weather;
        showData(ApiArray, Array2);
      }
    });
  });
});

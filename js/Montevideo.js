const URL_MONTEVIDEO =
  "https://api.openweathermap.org/data/2.5/weather?q=montevideo,uy&appid=aa56fcdffb2a6f5b543ed4f9b3029c5d";

let ApiArray = [];

function showData(API, Array2) {
  let style = "";
  for (let item of Array2) {
    style += `
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">${API.name} ${API.sys.country}</h5>
    </div>
  <div class="card-footer text-muted">
  <img src="https://openweathermap.org/img/w/${
    item.icon
  }.png" class="img-thumbnail" alt="Icon weather">
  <p>${item.description}</p>
  <p>Temperatura: ${(API.main.temp - 273.15).toFixed(0) + "º" + "C"}</p>
  <p>Sensación térmica: ${(API.main.feels_like - 273.15).toFixed(0) + "º" + "C"}</p>
  <p>Min: ${(API.main.temp_min - 273.15).toFixed(0) + "º" + "C"}</p>
  <p>Max: ${(API.main.temp_max - 273.15).toFixed(0) + "º" + "C"}</p>
  <p>Humedad: ${API.main.humidity}%</p>
  </div>
</div>
  `;
  }
  document.getElementById("ShowData").innerHTML = style;
}

document.addEventListener("DOMContentLoaded", function () {
  getJSONData(URL_MONTEVIDEO).then(function (resultado) {
    if (resultado.status === "ok") {
      ApiArray = resultado.data;
      Array2 = resultado.data.weather;
      showData(ApiArray, Array2);
    }
  });
});

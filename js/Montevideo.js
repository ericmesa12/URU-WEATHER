const URL_MONTEVIDEO =
  "https://api.openweathermap.org/data/2.5/weather?q=montevideo,uy&appid=aa56fcdffb2a6f5b543ed4f9b3029c5d";

let ApiArray = [];

function montevideoData(API) {
  let style = "";
  style += `
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">${API.name} ${API.sys.country}</h5>
      <p class="card-text">${API.weather.id}</p>
    </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
  `;

  document.getElementById("ShowData").innerHTML = style;
}

document.addEventListener("DOMContentLoaded", function () {
  getJSONData(URL_MONTEVIDEO).then(function (resultado) {
    if (resultado.status === "ok") {
      ApiArray = resultado.data;
      montevideoData(ApiArray);
    }
  });
});

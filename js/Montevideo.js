let ApiArray = [];

function montevideoData(data) {
  formatData = "";
  for (let OneData of data) {
    formatData += `
      <h1>${OneData.name}</h1>
      `;
  }
  document.getElementById("ShowDates").innerHTML = formatData;
}

document.addEventListener("DOMContentLoaded", () => {
  fetch(URL_MONTEVIDEO)
    .then((Response) => Response.json)
    .then((data) => {
      data = ApiArray;
      montevideoData(ApiArray);
    });
});

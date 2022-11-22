function montevideoData(array) {
    formatData = "";
    for (let i = 0; i < array.length; i++) {
      formatData += `
      
      `;
    }
    document.getElementById("").innerHTML = formatData;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    fetch(URL_MONTEVIDEO)
      .then((Response) => Response.json)
      .then((data) => montevideoData(data));
  });
  
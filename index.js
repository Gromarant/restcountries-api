const cardTemplate = function (/* You can pass the data here*/) {
  return `<div class="card">
              <img id="flag-image" src="ADD THE IMAGE LINK HERE" alt="flag" />
              <h1 class="center">ADD COUNTRY NAME HERE</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

try {
  fetch(`https://restcountries.com/v3.1/all`)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (countries) {
      countries.map(country => {
        let name = country.name.common;
        let flag = country.flags.svg;
        let alt = country.flags.alt;
  
        countriesNode.innerHTML += cardTemplate({name, flag, alt});
      })
    });
}
catch (error) {
  console.log(`Error: error.stack`);
}
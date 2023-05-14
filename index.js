const cardTemplate = function (props) {
  return `<div class="card">
              <img id="flag-image" src="${props.img}" alt="${props.alt}" />
              <h1 class="center">${props.commonName}</h1>
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
        let { name:{common:commonName}, flags:{svg:img , alt} } = country;
        let props = {commonName, img, alt};
        countriesNode.innerHTML += cardTemplate(props);
      })
    });
}
catch (error) {
  console.log(`Error: error.stack`);
}
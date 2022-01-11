
async function getPhotographers() {
  const res = await fetch('../../data/photographers.json');
  const data = await res.json();

  return {
    photographers: data.photographers,
  };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    //Créer une instance
    const photographerModel = photographerFactory(photographer);
    //Créer une carte
    const userCardDOM = photographerModel.getUserCardDOM();
    //Ajouter cette carte
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère la liste des photographes
  const { photographers } = await getPhotographers();
  //Je construis mes instances ici 
  displayData(photographers);
}

init();

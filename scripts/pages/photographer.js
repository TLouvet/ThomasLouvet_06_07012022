/**
 * Get single photographer info based on provided id
 * @param {string | number} id 
 * @returns 
 */
async function getSinglePhotographer(id) {
  const res = await fetch("../../data/photographers.json");
  const data = await res.json();
  const photographer = data.photographers.find((p) => (p.id == id));

  return {
    photographer,
  };
}

/**
 * Display photographer info based what was found on getSinglePhotographer
 * @param {object} photographer 
 */
async function displayPhotographer(photographer){
  let author = photographerFactory(photographer);
  document.getElementById("photograph-banner").innerHTML = author.getUserBanner();
}

/**
 * Find all media for one photographer based on provided id
 * @param {string | number} id 
 * @returns pictures and videos of specified photographer
 */
async function getSinglePhotographerMedia(id) {
  const res = await fetch("../../data/photographers.json");
  const data = await res.json();
  const medias = data.media.filter((media) => (media.photographerId == id));
  return {
    medias,
  };
}

/**
 * Display one photographer's media on the page
 * @param {object[]} medias 
 * @param {string} photographer - photographer name 
 */
async function displayData(medias, photographer) {
  const photographSection = document.querySelector(".photograph_section");
  medias.forEach(media => {
    //Create instance && card
    const isImage = media.image !== undefined;
    const mediaModel = new MediaFactory(media, photographer, isImage ? "picture" : "video")
    const mediaCardDom = mediaModel.getMediaCardDOM();
    photographSection.appendChild(mediaCardDom);
  });
}

/**
 * Show total number of likes and photographer daily rate
 * @param {number} likes 
 * @param {number} rate 
 */
async function displayAsideInformation(likes, rate){

  const body = document.getElementsByTagName('main')[0];
  const likesDisplay = `
  <aside style="background-color: #DB8876; display: flex; justify-content:space-between; position:fixed; bottom:0; right:30px; width:375px; padding:0 35px 0 35px;">
    <p id="total-likes" style="font-size:24px; font-weight:700;">${likes} </p>
    <p style="font-size:24px; font-weight:700;">${rate}€ / jour</p>
  </aside> 
  `
  body.innerHTML += likesDisplay; 
}

/**
 * Gets photographer media and sort by selected parameter and redisplay data
 * @param {string} arg 
 */
async function sortBy(arg){
  document.getElementById("photo_section").innerHTML = '';
  const id = document.URL.split('=')[1];
  const { photographer } = await getSinglePhotographer(id);
  const {medias} = await getSinglePhotographerMedia(id);

  if (arg == "Popularité") {
    medias.sort((a,b) => b.likes - a.likes); // Most liked first
  }
  else if (arg == "Date"){
    medias.sort((a,b) => b.date.localeCompare(a.date)); // Most recent first
  }
  else 
    medias.sort((a,b) => a.title.localeCompare(b.title)); //Alphabetical order
  
  displayData(medias, photographer.name.split(' ')[0]);
}

/**
 * Pilot function for photographer page
 */
async function init() {
  const id = document.URL.split("=")[1];
  const { photographer } = await getSinglePhotographer(id);
  displayPhotographer(photographer);
  sortBy("Popularité");
  displayAsideInformation(getTotalLikes(medias), photographer.price);
}

init();


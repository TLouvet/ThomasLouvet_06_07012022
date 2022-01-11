function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `../../assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const card = `
      <a href="photographer.html?id=${id}" title="${name}"> 
        <img src=${picture} alt="" />
        <h2 >${name}</h2>
      </a>
      <div>
        <h3 class="location" lang="en">${city}, ${country}</h3>
          <p class="bold">${tagline} </p>
          <p class="grey-text">${price}€/jour</p>
      </div> `;

    article.innerHTML = card;

    return article;
  }

  function getUserBanner(){
    const card = `
      <div id="author">
        <h1 id="author_name">${name}</h2>
        <p lang="en"id="author_location" class="subtitle">${city} ${country}</p>
        <p id="author_tagline">${tagline}</p>
      </div>
      <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
      <div><img src=${picture} id="author_picture" alt=${name} /></div>`;
    
    return card;
  }

  return { name, picture, city, country, tagline, getUserCardDOM, getUserBanner };
}



function Picture(data, photographer) {
    const { title, alt, image, likes, id } = data;
  
    const picture = `../../assets/images/${photographer}/${image}`;
  
    function getMediaCardDOM() {
      const article = document.createElement("article");
      const send = `
          <a href="#lightbox-modal" title="${title}" onclick="displayLightbox('${picture}')">
            <img src="${picture}" alt="${alt}" id="${id}" class="photo clickable-photo" />
          </a>
          <div class="bold subcard-info">
            <p lang="en">${title} </p>
            <div id="media-${id}-likes" class="subcard-likes">
              <p >${likes} </p>
              <img class="heart-img smallicon" src="../../assets/icons/heart.png" alt="ajouter un like" onclick="incrementLikes('${id}')" />
            </div>  
          </div> 
       `;
  
      article.innerHTML = send;
  
      return article;
    }
  
    return { getMediaCardDOM };
  }
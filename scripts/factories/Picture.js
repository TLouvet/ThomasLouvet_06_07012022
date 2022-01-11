function Picture(data, photographer) {
    const { title, image, likes, id } = data;
  
    const picture = `../../assets/images/${photographer}/${image}`;
  
    function getMediaCardDOM() {
      const article = document.createElement("article");
      const send = `
          <a href="#lightbox-modal" title="${title}" onclick="displayLightbox('${picture}')">
            <img src="${picture}" alt="${title}" id="${id}" class="photo clickable-photo" />
          </a>
          <div style="display:flex; justify-content:space-between; width:100%; color:#901C1C!important; font-size:20px!important;" class="bold">
            <p lang="en">${title} </p>
            <div id="media-${id}-likes" style="display:flex; align-items:center;">
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
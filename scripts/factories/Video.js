function Video(data, photographer) {
    const { title, alt, video, likes, id } = data;
  
    const src = `../../assets/images/${photographer}/${video}`;
  
    function getMediaCardDOM() {
      const article = document.createElement("article");
      const send = `
        <a href="#lightbox-modal" onclick="displayLightbox('${src}')">
          <video src=${src} class="photo clickable-photo" aria-label="${alt}" paused/>
        </a>
        <div class="bold subcard-info">
          <p >${title} </p>
          <div id="media-${id}-likes" class="subcard-likes">
            <p >${likes} </p>
            <img class="heart-img smallicon" src="../../assets/icons/heart.png" alt="ajouter un like" onclick="incrementLikes('${id}')" />
          </div>  
        </div> `;
  
      article.innerHTML = send;
  
      return article;
    }
  
    return { getMediaCardDOM };
  }
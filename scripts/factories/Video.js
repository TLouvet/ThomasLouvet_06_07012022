function Video(data, photographer) {
    const { title, video, likes, id } = data;
  
    const src = `../../assets/images/${photographer}/${video}`;
  
    function getMediaCardDOM() {
      const article = document.createElement("article");
      const send = `
        <div class="text-centered">
          <a href="#lightbox-modal" onclick="displayLightbox('${src}')">
            <video src=${src} class="photo clickable-photo" aria-label="${title}" paused/>
          </a>
          <div style="display:flex; justify-content:space-between; width:100%; color:#901C1C!important; font-size:20px!important;" class="bold">
            <p >${title} </p>
            <div id="media-${id}-likes" style="display:flex; align-items:center;">
              <p >${likes} </p>
              <img class="heart-img smallicon" src="../../assets/icons/heart.png" alt="ajouter un like" onclick="incrementLikes('${id}')" />
            </div>  
          </div> 
        </div>`;
  
      article.innerHTML = send;
  
      return article;
    }
  
    return { getMediaCardDOM };
  }
/**
 * On click on a like button, increment related picture's likes and total likes
 * @param {string | number} id 
 */
function incrementLikes(id){
    const div = document.getElementById(`media-${id}-likes`);
    const likeNumber = parseInt(div.firstChild.nextSibling.innerText);
    div.firstChild.nextSibling.innerText = likeNumber + 1;
  
    const totalLikes = parseInt(document.getElementById("total-likes").innerText);
    document.getElementById("total-likes").innerText = totalLikes + 1;
}


/**
 * Add each media likes to make total counter
 * @param {object[]} medias 
 * @returns 
 */
function getTotalLikes(medias){
    let sum = 0;
    medias.forEach(media => sum += media.likes);
    return sum;
}
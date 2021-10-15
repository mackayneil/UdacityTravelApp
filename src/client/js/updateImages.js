// Updates the images tab
const updateImages = (data) => {
    const imageCards = document.querySelector('.image-card-container');

    const backgroundImg = document.querySelector("#background-img");
    backgroundImg.style.backgroundImage = `url(${data.hits[0].largeImageURL})`   
    imageCards.innerHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        const imageUrl = data.hits[i].webformatURL;
        imageCards.innerHTML += `<div class="image-card" style="background-image: url(${imageUrl})"></div>`
    }
}

export { updateImages }
const handleImages = (bgImg, franceImg, spainImg, thailandImg, japanImg) => {
    const backgroundImg = document.querySelector("#background-img");
    const france = document.querySelector('.france');
    const spain = document.querySelector('.spain');
    const thailand = document.querySelector('.thailand');
    const japan = document.querySelector('.japan');

    france.style.backgroundImage = `linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%), url(${franceImg})`;
    spain.style.backgroundImage = `linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%), url(${spainImg})`;
    thailand.style.backgroundImage = `linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%), url(${thailandImg})`;
    japan.style.backgroundImage = `linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%), url(${japanImg})`;
    backgroundImg.style.backgroundImage = `url(${bgImg})`   
}

export { handleImages }
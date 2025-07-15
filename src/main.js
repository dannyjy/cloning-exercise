const secondCardContainer = document.querySelector(".second-card-container");
const imagesContainer = document.querySelector(".images-container");

const imageGallery = [
    {image: './images/trip1.jpeg',description: 'Holiday home'},
    {image: './images/h1.jpeg',description: 'Holiday apartment'},
    {image: './images/h2.jpeg',description: 'Holiday cottage'},
    {image: './images/h3.jpeg',description: 'Country house'},
    {image: './images/h4.jpeg',description: 'Villa'}
]

const expolerCardsData = [
    {detail: 'Last-minute deals for thousands of accomdations',image: './images/cardImage1.jpeg'},
    {detail: 'How to save this summer', image: './images/h1.jpeg' },
    {detail: 'Last-minute deals for thousands', image: './images/h3.jpeg' }
]

const expolerCards = (image, detail) => {
    return  `
        <div class="second-card">
            <div class="second-card-content">
                <p>${detail}</p>
                <button>Book now <span><img class="icon-img" src="./images/download.svg" alt=""></span></button>
            </div>
            <div class="img-holder" style="background-image: url(${image})"></div>
        </div>
    `

}

const imageGalleryCards = (image, description) => {
    return  `<div class="image-card" style="background-image: url(${image})">
    <h3>${description}</h3>
    </div>
    `
}

expolerCardsData.map((data) => secondCardContainer.innerHTML += expolerCards(data.image,data.detail))
imageGallery.map( (data) => imagesContainer.innerHTML += imageGalleryCards(data.image,data.description))
const secondCardContainer = document.querySelector(".second-card-container");
const imagesContainer = document.querySelector(".images-container");

const imageGalary = [
    {
        image: './images/homePic.jpg',
        description: 'Holiday home'
    },
    {
        image: './images/homePic.jpg',
        description: 'Holiday apartment'

    },{
        image: './images/homePic.jpg',
        description: 'Holiday cottage'

    },{
        image: './images/homePic.jpg',
        description: 'Country house'

    },{
        image: './images/homePic.jpg',
        description: 'Villa'

    },
]

const expolerCardsData = [
    {
        detail: 'Last-minute deals for thousands of accomdations',
        image: './images/cardImage1.jpeg'
    },{
        detail: 'Last-minute deals for thousands',
        image: './images/cardImage1.jpeg'
    },{
        detail: 'Last-minute deals for thousands',
        image: './images/cardImage1.jpeg'
    }
]

const expolerCards = expolerCardsData.map((data) => (
    `
        <div class="second-card">
            <div class="second-card-content">
                <p>${data.detail}</p>
                <button>Book now <span><img class="icon-img" src="./images/download.svg" alt=""></span></button>
            </div>
            <div class="img-holder" style="background-image: url(${data.image})"></div>
        </div>
    `
))

const imageGalleryCards = imageGalary.map((data) => (
    `
        <div class="image-card" style="background-image: url(${data.image})">
            <h3>${data.description}</h3>
        </div>
    `
))

imagesContainer.innerHTML = imageGalleryCards;
secondCardContainer.innerHTML = expolerCards;
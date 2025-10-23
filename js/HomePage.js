/* This javascript is used to display dynamic data */
/* Fetch Element from DOM */
const carouselContainer = document.getElementById('carousel-inner');

/* Loop over items in main and add them to the carousel Container */
data.forEach((element, index) => {
    if(element.type === "main"){
        /* Prepare article element */
        const articleElement = `
            <article class="carousel-item ${index === 0 ? "active" : ""} main-article">
                <img src="images/${element.image_name}" alt="${element.image_alt}" class="article-image">
                <h1 class="title">${element.title}</h1>
                <p class="description">${element.shortDescription}</p>
                <p class="date"><time datetime="2022-04-12">${element.date}</time></p>
            </article>
        `

        carouselContainer.innerHTML += articleElement;
    }
});



/* This javascript is used to display dynamic data */


function loadCarousel(){
    /* Fetch Carousel Container and carousel indicator container from DOM */
    const carouselContainer = document.getElementById('carousel-inner');
    const carouselIndicators = document.getElementById('carousel-indicators');

    /* Set Carousel Counter to track items in carousel
     * This helps indicator buttons and active carousels.
     */
    let carouselCount = 0;
    /* Loop over items in data*/
    data.forEach((element) => {
        /* If element has type main display it in the carousel */
        if(element.type === "main"){
            /* Prepare article element */
            const articleElement = `
                <a href="html/SingleBlog.html?id=${element.id}">
                    <article class="carousel-item ${carouselCount === 0 ? "active" : ""} main-article">
                        <img src="images/${element.image_name}" alt="${element.image_alt}" class="article-image">
                        <h1 class="title">${element.title}</h1>
                        <p class="description">${element.shortDescription}</p>
                        <p class="date"><time datetime="${new Date(element.date)}">${element.date}</time></p>
                    </article>
                </a>
            `

            /* Prepare indicator buttons */
            const carouselIndicatorHTML = `
                <button type="button" data-bs-target="#main-carousel" data-bs-slide-to="${carouselCount}" class="${carouselCount === 0 ? "active" : ""}" aria-current="${carouselCount === 0}" aria-label="Slide ${carouselCount+1}"></button>
            `

            /* Append articles and indicators to their DOM container */
            carouselContainer.innerHTML += articleElement;
            carouselIndicators.innerHTML += carouselIndicatorHTML;

            /* Add one to carousel count */
            carouselCount += 1;
        }
    });
}

function loadTrending(){
    /* Fetch trending container from DOM */
    const trendingContainer = document.getElementById('trending-cards');

    /* Loop over items in data */
    data.forEach((element) => {
        /* If element has type trending display it in the trending container */
        if(element.type === "trending"){
            /* Prepare card element */
            const cardElement = `
                    <a href="html/SingleBlog.html?id=${element.id}">
                        <section class="card-local">
                            <section class="card-content">
                                <p class="card-badge">${element.category}</p>
                                <h1 class="title card-title">${element.title}</h1>
                                <p class="description card-description">${element.shortDescription}</p>
                                <p class="date"><time datetime="${new Date(element.date)}">${element.date}</time></p>
                            </section>
                            <figure class="image-container">
                                <img src="images/${element.image_name}" alt="${element.image_alt}" class="card-image">
                            </figure>
                        </section>
                    </a>
                `
            /* Append card to trending container */
            trendingContainer.innerHTML += cardElement
        }
    })
}

function loadLatest(){
    /* Fetch latest container from DOM */
    const latestContainer = document.getElementById('latest-cards');

    /* Loop over items in data */
    data.forEach((element) => {
        /* If element has type latest display it in the latest container */
        if(element.type === "latest"){
            /* Prepare card element */
            const cardElement = `
                    <a href="html/SingleBlog.html?id=${element.id}">
                        <section class="card-local">
                            <section class="card-content">
                                <p class="card-badge">${element.category}</p>
                                <h1 class="title card-title">${element.title}</h1>
                                <p class="description card-description">${element.shortDescription}</p>
                                <p class="date"><time datetime="${new Date(element.date)}">${element.date}</time></p>
                            </section>
                            <figure class="image-container">
                                <img src="images/${element.image_name}" alt="${element.image_alt}" class="card-image">
                            </figure>
                        </section>
                    </a>
                `
            /* Append card to latest container */
            latestContainer.innerHTML += cardElement
        }
    })
}

/* Load the functions once html has loaded */
document.addEventListener("DOMContentLoaded" , () => {
    loadCarousel();
    loadTrending();
    loadLatest();
})





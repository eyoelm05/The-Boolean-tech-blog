/* This javascript is used to display dynamic data */
/* Fetch Element from DOM */
const carouselContainer = document.getElementById('carousel-inner');
const trendingContainer = document.getElementById('trending-cards');
const latestContainer = document.getElementById('latest-cards');

/* Loop over items in main and add them to the carousel Container */
data.forEach((element, index) => {
    if(element.type === "main"){
        /* Prepare article element */
        const articleElement = `
            <a href="html/SingleBlog.html?id=${element.id}">
                <article class="carousel-item ${index === 0 ? "active" : ""} main-article">
                    <img src="images/${element.image_name}" alt="${element.image_alt}" class="article-image">
                    <h1 class="title">${element.title}</h1>
                    <p class="description">${element.shortDescription}</p>
                    <p class="date"><time datetime="${new Date(element.date)}">${element.date}</time></p>
                </article>
            </a>
        `

        carouselContainer.innerHTML += articleElement;
    }
});


data.forEach((element) => {
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
        trendingContainer.innerHTML += cardElement
    }
})

data.forEach((element) => {
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
        latestContainer.innerHTML += cardElement
    }
})


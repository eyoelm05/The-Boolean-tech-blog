/* This javascript is used to display dynamic data */
/* Fetch Element from DOM */
const figureElement = document.getElementById("article-image")
const articleElement = document.getElementById("article")
const relatedBlogs = document.querySelector('.related-blogs')
const relatedContentContainer = document.getElementById("related-blogs-cards")

/* Get id and type from url parameters */
const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString)
const id = searchParams.get('id')

/* If a user tries to manually access this page without an id load index.html */
if(!id){
    window.location.href = "/index.html"
}

/* Get data by using ID: since data is sorted no need to search*/
const article = data[id-1]

const figureHTML =  `
    <img src="../images/${article.image_name}" alt="${article.image_alt}" class="news-image">
`
const articleHTML = `
            <section class="headline">
                <p class="date"><time datetime="${new Date(article.date)}">${article.date}</time></p>
                <h1 class="title">${article.title}</h1>
                <p class="description">${article.shortDescription}</p>
                <p class="description">Written by: ${article.author}</p>
            </section>

            <!-- Article Content -->
            <section class="article-content">
                <p class="article-text">
                    ${article.description}
                </p>
            </section>
`

figureElement.innerHTML = figureHTML
articleElement.innerHTML = articleHTML

let cardElement;
data.forEach((element) => {
    if(element.category == article.category && element.id !== article.id){
        /* Prepare card element */
        cardElement = `
            <a href="SingleBlog.html?id=${element.id}">
                <section class="card-local">
                    <section class="card-content">
                        <p class="card-badge">${element.category}</p>
                        <h1 class="title card-title">${element.title}</h1>
                        <p class="description card-description">${element.shortDescription}</p>
                        <p class="date"><time datetime="${new Date(element.date)}">${element.date}</time></p>
                    </section>
                    <figure class="image-container">
                        <img src="../images/${element.image_name}" alt="${element.image_alt}" class="card-image">
                    </figure>
                </section>
            </a>
            `
        relatedContentContainer.innerHTML += cardElement
    }
})

/* Hide related blogs if there isn't a blog in the same category */
if(!cardElement){
    relatedBlogs.classList.add("hidden")
}
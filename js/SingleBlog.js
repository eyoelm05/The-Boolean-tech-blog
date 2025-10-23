/* This javascript is used to display dynamic data */
/* Fetch Element from DOM */
const figureElement = document.getElementById("article-image")
const articleElement = document.getElementById("article")

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

/* Get value to category from url */
const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
const category = searchParams.get('category');

/* If a user tries to manually access this page without a category parameter load index.html */
if(!category){
    window.location.href = "/index.html";
}

const categoryContainer = document.getElementById('category-container');

let itemsListHTML = "";

/* Use a variable clean category to protect from XSS attack */
let cleanCategory;
data.forEach(element => {
    if(element.category === category){
        console.log(element)
        const itemHTML = `
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
        `;

        itemsListHTML += itemHTML;

        /* Set Clean Category only once */
        if(!cleanCategory){
            /* Set clean category from data rather than the url input */
            cleanCategory = element.category
        }
    }
});

/* Redirect back to index if there is no item with that category name */
if(!itemsListHTML){
    window.location.href = "/index.html";
}


/* Prepare html for display */
let categoriesHTML = `
    <h2 class="title category-title">${cleanCategory}</h2>
`
categoriesHTML += itemsListHTML;

categoryContainer.innerHTML += categoriesHTML


function loadPage(){
    /* Get value of category from url */
    const paramsString = window.location.search; // Get search parameter from the browser
    const searchParams = new URLSearchParams(paramsString); // Create URLSearchParams object based on the parameter
    const category = searchParams.get('category'); // Get the category attribute

    /* If a user tries to manually access this page without a category parameter load index.html */
    if(!category){
        window.location.href = "/index.html";
    }

    /* Get Category Container from DOM */
    const categoryContainer = document.getElementById('category-container');

    let itemsListHTML = ""; // Variable to store all the cards

    /* Use a variable clean category to protect from XSS attack */
    let cleanCategory;
    
    data.forEach(element => {

        /* If category of the element matches the category inserted add card to the itemsListHTML */
        if(element.category === category){
            /* Single Card HTML */
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

            /* Append single card to the list of cards */
            itemsListHTML += itemHTML;

            /* Set Clean Category only once */
            if(!cleanCategory){
                /* Set clean category from data rather than the url input for protection against XSS */
                cleanCategory = element.category
            }
        }
    });

    /* Redirect back to index if there is no item with that category name 
     * This can only happen if the user manually altered the url
     */
    if(!itemsListHTML){
        window.location.href = "/index.html";
    }

    /* Prepare html for display by having a header and the list of cards*/
    let categoriesHTML = `
        <h2 class="title category-title">${cleanCategory}</h2>
    `
    categoriesHTML += itemsListHTML;

    /* Append the prepared html to the container */
    categoryContainer.innerHTML = categoriesHTML
}

/* Load the page once html has loaded */
document.addEventListener("DOMContentLoaded" , loadPage());

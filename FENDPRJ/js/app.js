async function loadComponent(id, file) {

    const response = await fetch(file);

    const html = await response.text();

    document.getElementById(id).innerHTML = html;

}
async function loadFeaturedProducts(){

    try{

        const response = await fetch(API_URL);
        const data = await response.json();

        const container = document.getElementById("featuredProducts");

        container.innerHTML="";

        data.products.slice(0,4).forEach(product=>{

            container.innerHTML += `
                <div class="col-lg-3 col-md-6">

                <div class="card product-card h-100">

                <img src="${product.thumbnail}" class="card-img-top">

                <div class="card-body">

                <span class="badge bg-success mb-2">
                ${product.category}
                </span>

                <h5>${product.title}</h5>

                <h4 class="text-success fw-bold">
                RM ${product.price}
                </h4>

                <button class="btn btn-success w-100 mt-2">

                View Details

                </button>

                </div>

                </div>

                </div>
            `;

        });

    }

    catch(error){

        console.log(error);

    }

}


async function init() {

    await loadComponent("navbar", "components/navbar.html");

    await loadComponent("footer", "components/footer.html");

    loadFeaturedProducts();

    // Initialize Colour Blind Mode
    if (typeof initTheme === "function") {
        initTheme();
    }

}

init();
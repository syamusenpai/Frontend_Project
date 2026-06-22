let allProducts = [];

async function loadProducts() {

    try {

        const response = await fetch(API_URL);
        const data = await response.json();

        allProducts = data.products;

        displayProducts(allProducts);

    } catch (error) {

        console.error(error);

    }

}

loadProducts();

function displayProducts(products) {

    const container = document.getElementById("productContainer");

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `

        <div class="col-lg-3 col-md-4 col-sm-6">

            <div class="card product-card h-100 shadow-sm">

                <img src="${product.thumbnail}" class="card-img-top product-image">

                <div class="card-body d-flex flex-column">

                    <span class="badge bg-success mb-2">
                        ${product.category}
                    </span>

                    <h5>${product.title}</h5>

                    

                    <h4 class="text-success fw-bold">
                        RM ${product.price}
                    </h4>

                    <button
                        class="btn btn-success mt-auto detailsBtn"
                        data-id="${product.id}">

                        <i class="bi bi-eye"></i>
                        View Details

                    </button>

                </div>

            </div>

        </div>

        `;

    });

    document.querySelectorAll(".detailsBtn").forEach(button => {

        button.addEventListener("click", function () {

            const id = this.dataset.id;

            window.location.href = `product_details.html?id=${id}`;

        });

    });

} 

//search function
document.getElementById("searchInput").addEventListener("input", function () {

    const keyword = this.value.toLowerCase();

    const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(keyword)
    );

    displayProducts(filtered);

});

//sort function
document.getElementById("sortSelect").addEventListener("change", function () {

    const value = this.value;

    let products = [...allProducts];

    switch (value) {

        case "lowHigh":
            products.sort((a, b) => a.price - b.price);
            break;

        case "highLow":
            products.sort((a, b) => b.price - a.price);
            break;

        case "az":
            products.sort((a, b) => a.title.localeCompare(b.title));
            break;

        case "za":
            products.sort((a, b) => b.title.localeCompare(a.title));
            break;

    }

    displayProducts(products);

});

//refresh function
document.getElementById("refreshBtn").addEventListener("click", () => {

    document.getElementById("searchInput").value = "";
    document.getElementById("sortSelect").value = "default";

    displayProducts(allProducts);

});
// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

console.log(API_URL);
console.log(productId);
console.log(`${API_URL}/${productId}`);

async function loadProduct() {

    try {

        const response = await fetch(`${API_URL}/${productId}`);
        const product = await response.json();

        // Product Image
        document.getElementById("productImage").src = product.thumbnail;
        document.getElementById("productImage").alt = product.title;

        // Product Info
        document.getElementById("productTitle").textContent = product.title;
        document.getElementById("productPrice").textContent = product.price.toFixed(2);
        document.getElementById("productRating").textContent = product.rating;
        document.getElementById("productDescription").textContent = product.description;
        document.getElementById("productCategory").textContent = product.category;

        // Table
        document.getElementById("brand").textContent = product.brand;
        document.getElementById("category").textContent = product.category;
        document.getElementById("stock").textContent = product.stock;
        document.getElementById("weight").textContent = product.weight + " g";
        document.getElementById("sku").textContent = product.sku;

        // Demo Nutrition Data
        document.getElementById("calories").textContent = Math.floor(product.price * 30);
        document.getElementById("protein").textContent = (Math.random() * 10 + 5).toFixed(1) + " g";
        document.getElementById("fat").textContent = (Math.random() * 8 + 2).toFixed(1) + " g";
        document.getElementById("carbs").textContent = (Math.random() * 20 + 10).toFixed(1) + " g";
        document.getElementById("sugar").textContent = (Math.random() * 10 + 2).toFixed(1) + " g";

        // Health Score
        const score = Math.floor(Math.random() * 30) + 70;

        document.getElementById("healthBar").style.width = score + "%";
        document.getElementById("healthBar").textContent = score + "%";

        // Compare Button
        document.getElementById("compareBtn").addEventListener("click", () => {

            window.location.href = `compare.html?product1=${product.id}`;

        });

        // View Summary Button
        document.getElementById("summaryBtn").addEventListener("click", () => {

            window.location.href = `summary.html?product=${product.id}`;

        });

    }
    catch (error) {

        console.error(error);

    }

}

loadProduct();
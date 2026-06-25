const DUMMY_API =
"https://dummyjson.com/products/category/groceries";

let groceryList = [];

window.addEventListener("DOMContentLoaded", () => {

    loadProducts();

});

function printReport() {

    const summaryCard =
        document.getElementById("summaryCard");

    if (summaryCard.style.display === "none" ||
        summaryCard.style.display === "") {

        alert("Please generate a summary before printing.");

        return;

    }

    window.print();

}

async function loadProducts() {

    try {

        const response =
            await fetch(DUMMY_API);

        const data =
            await response.json();

        groceryList =
            data.products;

        const select =
            document.getElementById("productSelect");

        select.innerHTML =
            `<option value="">Choose a Product</option>`;

        groceryList.forEach(product => {

            select.innerHTML += `
                <option value="${product.id}">
                    ${product.title}
                </option>
            `;

        });

    }

    catch(error){

        console.log(error);

    }

}

function showSummary(){

    const product =
        groceryList.find(item =>
            item.id == document.getElementById("productSelect").value
        );

    if(!product){

        alert("Please select a product.");

        return;

    }

    const nutrition =
        nutritionData[product.title];

    document.getElementById("summaryCard").style.display =
        "block";

    document.getElementById("productImage").src =
        product.thumbnail;

    document.getElementById("productName").innerText =
        product.title;

    document.getElementById("productPrice").innerText =
        "RM " + product.price.toFixed(2);

    document.getElementById("productRating").innerText =
        product.rating + " / 5";

    document.getElementById("productCategory").innerText =
        product.category;

    document.getElementById("productStock").innerText =
        product.stock + " units";

    document.getElementById("calories").innerText =
        nutrition ? nutrition.calories + " kcal" : "N/A";

    document.getElementById("protein").innerText =
        nutrition ? nutrition.protein + " g" : "N/A";

    document.getElementById("fat").innerText =
        nutrition ? nutrition.fat + " g" : "N/A";

    document.getElementById("carbs").innerText =
        nutrition ? nutrition.carbs + " g" : "N/A";

    document.getElementById("recommendation").innerText =
        generateRecommendation(product, nutrition);

    document.getElementById("healthScore").innerText =
        generateHealthScore(product, nutrition);

    document.getElementById("generatedDate").innerText =
        new Date().toLocaleString();

}

function generateHealthScore(product, nutrition){

    if(!nutrition)
        return "★★★☆☆ Average";

    let score = 0;

    if(product.rating >= 4.5)
        score++;

    if(nutrition.calories <= 150)
        score++;

    if(nutrition.protein >= 10)
        score++;

    if(nutrition.fat <= 10)
        score++;

    switch(score){

        case 4:
            return "★★★★★ Excellent";

        case 3:
            return "★★★★☆ Healthy";

        case 2:
            return "★★★☆☆ Average";

        case 1:
            return "★★☆☆☆ Fair";

        default:
            return "★☆☆☆☆ Poor";

    }

}

function generateRecommendation(product, nutrition){

    if(!nutrition){

        return "No nutrition information available.";

    }

    if(nutrition.protein >= 20){

        return "Excellent source of protein. Suitable for muscle growth and high-protein diets.";

    }

    if(nutrition.calories < 100){

        return "Low-calorie food. Suitable for healthy snacking.";

    }

    if(nutrition.fat > 20){

        return "High fat content. Consume in moderation.";

    }

    if(nutrition.carbs > 50){

        return "High carbohydrate food. Good energy source but enjoy in moderation.";

    }

    if(product.rating >= 4.5){

        return "Highly rated by customers and recommended for purchase.";

    }

    return "Good everyday grocery item with balanced nutrition.";

}
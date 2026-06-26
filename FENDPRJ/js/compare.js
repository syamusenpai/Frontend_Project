const DUMMY_API =
"https://dummyjson.com/products/category/groceries";

let groceryList = [];

window.addEventListener("DOMContentLoaded", () => {

    getProducts();

});

async function getProducts(){

    try{

        const response =
            await fetch(DUMMY_API);

        const data =
            await response.json();

        groceryList =
            data.products;

        populateDropdown();

    }

    catch(error){

        console.error(error);

    }

}

function populateDropdown(){

    const product1 =
        document.getElementById("product1");

    const product2 =
        document.getElementById("product2");

    product1.innerHTML =
        "";

    product2.innerHTML =
        "";

    groceryList.forEach(product=>{

        product1.innerHTML +=
        `
        <option value="${product.id}">
            ${product.title}
        </option>
        `;

        product2.innerHTML +=
        `
        <option value="${product.id}">
            ${product.title}
        </option>
        `;

    });

}


function getNutrition(productName){

    return nutritionData[productName] || {

        calories: "N/A",
        protein: "N/A",
        fat: "N/A",
        carbs: "N/A"

    };

}


 function compareItem(){

    const firstProduct =
        groceryList.find(item =>
        item.id ==
        product1.value);

    const secondProduct =
        groceryList.find(item =>
        item.id ==
        product2.value);

    if(!firstProduct || !secondProduct){

        alert("Please select two products.");

        return;

    }

    document.getElementById("compareResult").style.display =
        "block";

    document.getElementById("name1").innerText =
        firstProduct.title;

    document.getElementById("name2").innerText =
        secondProduct.title;

    image1.src =
        firstProduct.thumbnail;

    image2.src =
        secondProduct.thumbnail;

    price1.innerText =
        "RM " + firstProduct.price;

    price2.innerText =
        "RM " + secondProduct.price;

    rating1.innerText =
        firstProduct.rating;

    rating2.innerText =
        secondProduct.rating;

    category1.innerText =
        firstProduct.category;

    category2.innerText =
        secondProduct.category;

    stock1.innerText =
        firstProduct.stock;

    stock2.innerText =
        secondProduct.stock;

    description1.innerText =
        firstProduct.description;

    description2.innerText =
        secondProduct.description;

    const nutrition1 = getNutrition(firstProduct.title);

    const nutrition2 = getNutrition(secondProduct.title);

    calories1.innerText = nutrition1.calories;
    calories2.innerText = nutrition2.calories;

    protein1.innerText = nutrition1.protein;
    protein2.innerText = nutrition2.protein;

    fat1.innerText = nutrition1.fat;
    fat2.innerText = nutrition2.fat;

    carbs1.innerText = nutrition1.carbs;
    carbs2.innerText = nutrition2.carbs;

}
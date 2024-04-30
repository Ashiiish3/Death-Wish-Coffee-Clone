const allProducts = document.querySelector("#allProducts")
const countProducts = document.querySelector("#product-count")
let allData = []
function fetchCoffeeData(){
    fetch("http://localhost:3000/coffee_data").then((res)=>res.json()).then((data)=>{
        countProducts.innerText = data.length
        allData = data;
        allCoffeeProducts(data)
    }).catch((err)=>console.log(err))
}
fetchCoffeeData()
function product(name, image_url, regular_price, id, star, rating, description){
    let div = `
        <div id="product" data-id="${id}" class="mt-4">
            <div id="image" class="mb-2"><a href="productDescr.html?title=${encodeURIComponent(name)}&price=${encodeURIComponent(regular_price)}&image=${encodeURIComponent(image_url)}&description=${encodeURIComponent(description)}&star=${encodeURIComponent(star)}&rating=${encodeURIComponent(rating)}&id=${encodeURIComponent(id)}"><img src="${image_url}" alt="" height="322px" data-id="${id}" class="coffee-Data"></a></div>
            <p id="name" class="m-0"><a href="productDescr.html?title=${encodeURIComponent(name)}&price=${encodeURIComponent(regular_price)}&image=${encodeURIComponent(image_url)}&description=${encodeURIComponent(description)}&star=${encodeURIComponent(star)}&rating=${encodeURIComponent(rating)}&id=${encodeURIComponent(id)}" data-id="${id}" class="coffee-Data">${name}</a></p>
            <p id="regular-price" class="m-0">$${regular_price}</p>
            <p id="rating" class="m-0 text-white">
            <span id="star" class="fs-5">${star}</span>
            ${rating}</p>
            <button data-id="${id}" id="add-cart" class="addCoffeeDataButton">Add to Cart <i class="ri-shopping-cart-2-line" id="cartIcon"></i></button>
        </div>
    `
    return div
}
function allCoffeeProducts(arrayData){
    let storeProducts = arrayData.map((element)=>product(element.name, element.image_url, element.regular_price, element.id, element.star, element.rating, element.description))
    allProducts.innerHTML = storeProducts.join("")
}
// for Filter Data
const features = document.querySelector("#featured")
const bestSelling = document.querySelector("#bestSelling")
const sortAtoZ = document.querySelector("#sortAtoZ")
const sortZtoA = document.querySelector("#sortZtoA")
const priceLowToHigh = document.querySelector("#lowToHigh")
const priceHighToLow = document.querySelector("#HighToLow")
features.addEventListener("click", ()=>{
    let storeFeatureData = allData.sort((a,b)=>a.id-b.id)
    allCoffeeProducts(storeFeatureData)
    
})
bestSelling.addEventListener("click", ()=>{
    let storeBestSelling = allData.sort((a,b)=>{
        if(a.star < b.star){
            return -1
        }
    })
    allCoffeeProducts(storeBestSelling)
})
sortAtoZ.addEventListener("click", ()=>{
    let storeAtoZData =  allData.sort((a,b)=>{
        if(a.name.toLowerCase() < b.name.toLowerCase()){
            return -1
        }
    })
    allCoffeeProducts(storeAtoZData)
})
sortZtoA.addEventListener("click",()=>{
    let storeZtoAData = allData.sort((a,b)=>{
        if(b.name.toLowerCase() < a.name.toLowerCase()){
            return -1
        }
    })
    allCoffeeProducts(storeZtoAData)
})
priceLowToHigh.addEventListener("click", ()=>{
    let storeFilterData = allData.sort((a,b)=>a.regular_price - b.regular_price)
    allCoffeeProducts(storeFilterData)
})
priceHighToLow.addEventListener("click", ()=>{
    let storeFilterData = allData.sort((a,b)=>b.regular_price - a.regular_price)
    allCoffeeProducts(storeFilterData)
})
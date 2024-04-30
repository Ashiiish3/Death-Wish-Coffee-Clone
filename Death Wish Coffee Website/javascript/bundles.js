const bundleData = document.querySelector("#bundleData")
const bundleCount = document.querySelector("#bundle-count")
let allData = []
function fetchBundleData(){
    fetch("http://localhost:3000/bundles_Data").then((res)=>res.json()).then((data)=>{
        bundleCount.innerText = data.length
        allData = data
        allBundleProducts(data)
    }).catch((err)=>console.log(err))
}
fetchBundleData()

function bundleProduct(name, image, price, id, description, rating, star){
    let div = `
        <div id="product" data-id="${id}" class="mt-4">
            <div id="image" class="mb-2"><a href="productDescr.html?title=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&id=${encodeURIComponent(id)}&star=${encodeURIComponent(star)}&rating=${encodeURIComponent(rating)}"><img src="${image}" alt="" height="322px" data-id="${id}" class="coffee-Data"></a></div>
            <p id="name" class="m-0"><a href="productDescr.html?title=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&id=${encodeURIComponent(id)}&star=${encodeURIComponent(star)}&rating=${encodeURIComponent(rating)}" class="coffee-Data">${name}</a></p>
            <p id="regular-price" class="m-0">$${price}</p>
            <p id="rating" class="m-0 text-white">
            <span id="star" class="fs-5">${star}</span>
            ${rating}</p>
            <button data-id="${id}" id="add-cart" class="addBundleData">Add to Cart <i class="ri-shopping-cart-2-line" id="cartIcon"></i></button>
        </div>
    `
    return div
}
function allBundleProducts(arrayData){
    let storeProducts = arrayData.map((element)=>bundleProduct(element.name, element.image, element.price, element.id, element.description, element.rating, element.star))
    bundleData.innerHTML = storeProducts.join("")
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
    allBundleProducts(storeFeatureData)
})
bestSelling.addEventListener("click", ()=>{
    let storeBestSelling = allData.sort((a,b)=>{
        if(a.star < b.star){
            return -1
        }
    })
    allBundleProducts(storeBestSelling)
})
sortAtoZ.addEventListener("click", ()=>{
    let storeAtoZData =  allData.sort((a,b)=>{
        if(a.name.toLowerCase() < b.name.toLowerCase()){
            return -1
        }
    })
    allBundleProducts(storeAtoZData)
})
sortZtoA.addEventListener("click",()=>{
    let storeZtoAData = allData.sort((a,b)=>{
        if(b.name.toLowerCase() < a.name.toLowerCase()){
            return -1
        }
    })
    allBundleProducts(storeZtoAData)
})
priceLowToHigh.addEventListener("click", ()=>{
    let storeFilterData = allData.sort((a,b)=>a.price - b.price)
    allBundleProducts(storeFilterData)
})
priceHighToLow.addEventListener("click", ()=>{
    let storeFilterData = allData.sort((a,b)=>b.price - a.price)
    allBundleProducts(storeFilterData)
})
// First Slider
const imageContainer = document.querySelector("#image-container")
const leftArrow = document.getElementById("left")
const rightArrow = document.getElementById("right")
// Second Slider
const sellerLeftArrow = document.getElementById("seller-left")
const sellerRightArrow = document.getElementById("seller-right")
const sellerImageContainer = document.getElementById("seller-image-container")
// First Slider
function fetchData(){
    fetch("https://json-server-10.onrender.com/data").then((response)=>response.json()).then((data)=>productCardList(data)).catch((err)=>console.log(err))
}
fetchData()
function productCardList(array){
    let store = array.map((el)=>productCard(el.image, el.title, el.price, el.rating, el.id, el.star, el.description))
    imageContainer.innerHTML = store.join("")
}
function productCard(image, title, price, rating, id, star, description){
    let div = `
        <div id="item" data-id="${id}" class="m-2">
            <div id="image" class="mb-2"><a href="productDescr.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&star=${encodeURIComponent(star)}&rating=${encodeURIComponent(rating)}&id=${encodeURIComponent(id)}"><img src="${image}" alt="" height="380px" data-id="${id}" class="desc-Data"></a></div>
            <p id="title" class="m-0"><a href="productDescr.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&star=${encodeURIComponent(star)}&rating=${encodeURIComponent(rating)}&id=${encodeURIComponent(id)}" class="desc-Data">${title}</a></p>
            <p id="price" class="m-0">$${price}</p>
            <p id="rating" class="m-0 text-white">
            <span id="star" class="fs-5">${star}</span>
           ${rating}</p>
           <button data-id="${id}" id="add-cart" class="addCartButton">Add to Cart <i class="ri-shopping-cart-2-line" id="cartIcon"></i></button>
        </div>
    `
    return div;
}
// For image slider
function calculateScrollDistance() {
    const screenWidth = window.innerWidth;
    if(screenWidth <= 480){
        return 255
    }
    else if(screenWidth <= 768){
        return 377
    }
    else{
        return 395
    }
}
rightArrow.addEventListener("click",()=>{
    const scrollDistance = calculateScrollDistance();
    imageContainer.style.scrollBehavior = "smooth"
    imageContainer.scrollLeft += scrollDistance
})
leftArrow.addEventListener("click",()=>{
    const scrollDistance = calculateScrollDistance();
    imageContainer.style.scrollBehavior = "smooth"
    imageContainer.scrollLeft -= scrollDistance
})
// Second Slider
function fetchsellerData(){
    fetch('https://json-server-10.onrender.com/seller-Data').then((resp)=>resp.json()).then((data)=>sellerCardList(data)).catch((err)=>console.log(err))
}
fetchsellerData()
function sellerCard(image, title, price, rating, id, star, description){
    let oneData = `
    <div id="item" data-id="${id}" class="m-2">
        <div id="image" class="mb-2"><a href="productDescr.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&star=${encodeURIComponent(star)}&rating=${encodeURIComponent(rating)}&id=${encodeURIComponent(id)}"><img src="${image}" alt="" height="380px"></a></div>
        <p id="title" class="m-0"><a href="productDescr.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&star=${encodeURIComponent(star)}&rating=${encodeURIComponent(rating)}&id=${encodeURIComponent(id)}">${title}</a></p>
        <p id="price" class="m-0">$${price}</p>
        <p id="rating" class="m-0 text-white">
        <span id="star" class="fs-5">${star}</span>
        ${rating}</p>
        <button data-id="${id}" id="add-cart" class="addSecondSlider">Add to Cart <i class="ri-shopping-cart-2-line" id="cartIcon"></i></button>
    </div>
    `
    return oneData;
}
function sellerCardList(array){
    let sellerData = array.map((oneEle)=>sellerCard(oneEle.image, oneEle.title, oneEle.price, oneEle.rating, oneEle.id,oneEle.star, oneEle.description))
    sellerImageContainer.innerHTML = sellerData.join("")
}
// for second slider
function calculateScrollDistanceForSecondSlider() {
    const screenWidthsecSlider = window.innerWidth;
    if(screenWidthsecSlider <= 480){
        return 255
    }
    else if(screenWidthsecSlider <= 768){
        return 377
    }
    else{
        return 395
    }
}
sellerRightArrow.addEventListener("click", ()=>{
    const scrollDistancesecSlider = calculateScrollDistanceForSecondSlider();
    sellerImageContainer.style.scrollBehavior = "smooth";
    sellerImageContainer.scrollLeft += scrollDistancesecSlider
})
sellerLeftArrow.addEventListener("click", ()=>{
    const scrollDistancesecSlider = calculateScrollDistanceForSecondSlider();
    sellerImageContainer.style.scrollBehavior = "smooth";
    sellerImageContainer.scrollLeft -= scrollDistancesecSlider
})
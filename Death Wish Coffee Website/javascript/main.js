// for Search box
let searchButton = document.querySelector(".search-icon")
let searchBox = document.querySelector(".search-box")
let seachCloseButton = document.querySelector("#search-close-icon")
searchButton.addEventListener("click", ()=>{
    searchBox.classList.add("active-search-box")
})
seachCloseButton.addEventListener("click", ()=>{
    searchBox.classList.remove("active-search-box")
})
// for Cart
let cart = document.querySelector(".cart")
let cartBtn = document.querySelector("#cart-icon")
let closeBtn = document.querySelector("#close-icon")
cartBtn.addEventListener("click", ()=>{
    cart.classList.add("active-cart")
})
closeBtn.addEventListener("click", ()=>{
    cart.classList.remove("active-cart")
})

let cartContainer = document.querySelector(".cart-content")
let cartCount = document.querySelector(".cart-count")

document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("addCartButton")){
        addToCart(e.target.dataset.id)
    } 
})
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("addSecondSlider")){
        secondAddCart(e.target.dataset.id)
    }
})
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("delete-icon")){
        deleteformAddtoCart(e.target.dataset.id)
    }
})
function addToCart(id){
        fetch(`http://localhost:3000/data/${id}`).then((res)=>res.json()).then((data)=>{
            let addObj = {
                "image": data.image,
                "title": data.title,
                "price": data.price,
                "id": data.id
            }
            fetch("http://localhost:3000/addToCartData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(addObj)
            })
        }).then((err)=>console.log(err))
}
function secondAddCart(id){
    fetch(`http://localhost:3000/seller-Data/${id}`).then((res)=>res.json()).then((data2)=>{
            let addObj2 = {
                "image": data2.image,
                "title": data2.title,
                "price": data2.price,
                "id": data2.id
            }
            fetch("http://localhost:3000/addToCartData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(addObj2)
            })
        }).then((err)=>console.log(err))
}
// fetch add to cart data
function fetchaddData(){
    fetch(`http://localhost:3000/addToCartData`).then((resp)=>resp.json()).then((addData)=>{
        allAddtoCart(addData)
    })
}
fetchaddData()
function oneAddtoCart(image, title, price, id){
    let div = `
        <div class="cart-box d-flex" id="box">
            <div class="cart-image me-3 me-lg-4 me-md-4">
                <img src="${image}" alt="" height="80px">
            </div>
            <div class="add-cart-title">
                <p>${title}</p>
                <input type="number" value="1" id="quantity">
            </div>
            <div class="cart-delete">
                <span class="delete-button fs-5"><i class="ri-delete-bin-7-line delete-icon" data-id="${id}"></i></span>
                <p class="cart-amount mt-2">$${price}</p>
            </div>
        </div>
        <hr>
    `
    return div
}
let sum = 0;
let grandTotal = document.querySelector("#amount")
function allAddtoCart(allData){
    totalAmount(allData)
    cartCount.innerHTML = allData.length
    let store = allData.map((ele)=>oneAddtoCart(ele.image, ele.title, ele.price, ele.id))
    cartContainer.innerHTML = store.join("")
}
// for delete from add to cart
function deleteformAddtoCart(id){
    fetch(`http://localhost:3000/addToCartData/${id}`, {
        method: "DELETE",
    })
}
let arr = []
function totalAmount(addAllData){
    arr = addAllData
    addAllData.forEach((ele)=>{
        sum = sum + Number(ele.price)
        grandTotal.innerHTML = sum
    })
}
// for coffee data add to cart
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("addCoffeeDataButton")){
        addToCartBox(e.target.dataset.id)
    }
})
function addToCartBox(id){
    fetch(`http://localhost:3000/coffee_data/${id}`).then((res)=>res.json()).then((data)=>{
        let coffeeData ={
            "image": data.image_url,
            "title": data.name,
            "price": data.regular_price,
            "id": data.id
        }
        fetch("http://localhost:3000/addToCartData", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(coffeeData),
        })
    }).then((err)=>console.log(err))
}
// for merch data add to cart
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("addMerchDataButton")){
        addToCartMerchData(e.target.dataset.id)
    }
})
function addToCartMerchData(id){
    fetch(`http://localhost:3000/merch_Data/${id}`).then((res)=>res.json()).then((merchdata)=>{
        let merchData ={
            "image": merchdata.image,
            "title": merchdata.name,
            "price": merchdata.price,
            "id": merchdata.id
        }
        fetch("http://localhost:3000/addToCartData", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(merchData),
        })
    }).then((err)=>console.log(err))
}
// for bundles data add to cart
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("addBundleData")){
        addToCartBundleData(e.target.dataset.id)
    }
})
function addToCartBundleData(id){
    console.log(id)
    fetch(`http://localhost:3000/bundles_Data/${id}`).then((res)=>res.json()).then((bundledata)=>{
        let bundleData ={
            "image": bundledata.image,
            "title": bundledata.name,
            "price": bundledata.price,
            "id": bundledata.id
        }
        fetch("http://localhost:3000/addToCartData", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bundleData),
        })
    }).then((err)=>console.log(err))
}
// in media query for menu-bar
let menuButton = document.querySelector("#menu-icon")
let menuBar = document.querySelector(".navbar-link")
menuButton.addEventListener("click", ()=>{
    menuBar.classList.toggle("menu-bar")
})
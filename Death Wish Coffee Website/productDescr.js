// for first slider, second slider, Coffee Page, merch page and bunbles Page put into description page
window.addEventListener("load", ()=>{
    const params = new URLSearchParams(window.location.search)
    const title = params.get("title")
    const price = params.get("price")
    const image = params.get("image")
    const description = params.get("description")
    const star = params.get("star")
    const rating = params.get("rating")
    const id = params.get("id")

    document.getElementById("image").src = image
    document.getElementById("title").innerText = title
    document.getElementById("productTitle").innerText = title
    document.getElementById("price").innerText = `$${price}`
    document.getElementById("description").innerText = description
    document.getElementById("star").innerHTML = star
    document.getElementById("rating").innerText = rating
    document.getElementById("add-cart").setAttribute("data-id",id)
    console.log(id)
    if(id>=0 && id<=8){
        document.getElementById("add-cart").setAttribute("class","addCartButton")
    }
    if(id>=9 && id<=17){
        document.getElementById("add-cart").setAttribute("class","addSecondSlider")
    }
    if(id>=18 && id<=37){
        document.getElementById("add-cart").setAttribute("class","addCoffeeDataButton")
    }
    if(id>=38 && id<=85){
        document.getElementById("add-cart").setAttribute("class","addMerchDataButton")
    }
    if(id>=86 && id<=103){
        document.getElementById("add-cart").setAttribute("class","addBundleData")
    }
})
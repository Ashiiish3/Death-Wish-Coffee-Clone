// for first slider, second slider, Coffee Page, merch page and bunbles Page put into description page
window.addEventListener("load", ()=>{
    const params = new URLSearchParams(window.location.search)
    console.log(params)
    const title = params.get("title")
    const price = params.get("price")
    const image = params.get("image")
    const description = params.get("description")
    const star = params.get("star")
    const rating = params.get("rating")
    const id = params.get("id")
    console.log(id)

    document.getElementById("image").src = image
    document.getElementById("title").innerText = title
    document.getElementById("productTitle").innerText = title
    document.getElementById("price").innerText = `$${price}`
    document.getElementById("description").innerText = description
    document.getElementById("star").innerHTML = star
    document.getElementById("rating").innerText = rating
    document.getElementById("add-cart").setAttribute("data-id",id)
    document.getElementById("add-cart").classList.add("addCartButton", "addSecondSlider", "addMerchDataButton", "addBundleData");
})
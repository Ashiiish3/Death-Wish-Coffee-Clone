let loginForm = document.querySelector("#login-form")
let loginArr = JSON.parse(localStorage.getItem("signupData")) || []
loginForm.addEventListener("submit", (el)=>{
    el.preventDefault();
    let loginEmail = document.querySelector("#LoginEmail").value;
    let loginPassword = document.querySelector("#LoginPassword").value;
    let newArr = loginArr.filter((ele)=>{
        if(loginEmail == ele.email && loginPassword == ele.password){
            return el
        }
    })
    console.log(newArr)
    if(newArr[0]){
        alert("Login Successfully")
        window.location.href = "index.html"
    }
    else{
        alert("Incorrect Email or Password")
        window.location.href = "login.html"
    }
})
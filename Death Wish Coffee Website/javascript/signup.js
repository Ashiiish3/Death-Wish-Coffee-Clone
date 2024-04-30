let signupForm = document.querySelector("#signup-form")
let signupArr = JSON.parse(localStorage.getItem("signupData")) || []
signupForm.addEventListener("submit", (el)=>{
    el.preventDefault();
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById ("last-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let signupObj = {
       firstName,
       lastName,
       email,
       password
    }
    let isValid = true;
    if(email === ""){
        findError("Email")
        isValid = false
    }else{
        document.querySelector("#EmailError").innerText = ""
    }
    if(password === ""){
        findError("Password")
        isValid = false
    }else{
        document.querySelector("#PasswordError").innerText = ""
    }
    if(isValid){
        alert("Your account has been created.")
        signupArr.push(signupObj)
        console.log(signupArr)
        localStorage.setItem("signupData", JSON.stringify(signupArr))
        document.getElementById("first-name").value = ""
        document.getElementById ("last-name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
        window.location.href = "index.html"
    }
})
function findError(id){
    document.querySelector(`#${id}Error`).innerHTML = `<i class="ri-error-warning-fill" style="color: red; background-color: white; border-radius: 50%; margin-right: 5px;"></i> ${id} can't be blank.`
}
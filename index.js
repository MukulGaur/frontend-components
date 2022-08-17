let container_div = document.getElementById("top-btns");
let reset_div = document.getElementById("reset-btns");
let btns = container_div.getElementsByClassName("top-btn");
let login_btn = document.getElementById("login-btn");
let sign_up_btn = document.getElementById("sign-up");
let name_field = document.getElementById("name");
let re_pass = document.getElementById("re-pass");
let passwd = document.getElementById("passwd");
let forget_pass = document.getElementById("forget-pass");
let back_btn = document.getElementById("back-btn");

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("selected");
        current[0].className = current[0].className.replace(" selected", "");
        this.className += " selected";
    });
};

sign_up_btn.addEventListener("click", function() {
    name_field.classList.remove("hide");
    re_pass.classList.remove("hide");
    forget_pass.classList.add("hide");
});

login_btn.addEventListener("click", function() {
    name_field.classList.add("hide");
    re_pass.classList.add("hide");
    forget_pass.classList.remove("hide");

});

forget_pass.addEventListener("click", function() {
    forget_pass.classList.add("hide");
    reset_div.classList.remove("hide");
    container_div.classList.add("hide");
    name_field.classList.add("hide");
    re_pass.classList.add("hide");
    passwd.classList.add("hide");
});

back_btn.addEventListener("click", function() {
    reset_div.classList.add("hide");
    container_div.classList.remove("hide");
    forget_pass.classList.remove("hide");
    passwd.classList.remove("hide");
});
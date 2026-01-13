const button = document.querySelectorAll(".button");
const body = document.querySelector("body");


button.forEach(function (button){
    button.addEventListener("click", function(e){
        body.style.backgroundColor = button.id;
    })
})
const classContainer = document.querySelector(".class-container");

setInterval(function (){
   let currDate = new Date();
   classContainer.innerHTML = currDate.toLocaleTimeString()
},1000)
console.log("Todo List");


const userInput = document.querySelector("#userinput");
const addTodo = document.querySelector("#addtodo");
const todoListContainer = document.querySelector(".todoListContainer");

addTodo.addEventListener("click", function(e){
    e.preventDefault();
    
    let userInputText = userInput.value;
    console.log(userInputText.length);
    if(userInputText.length === 0){
        alert("Input Feild can not be empty")
    } else{
        displayTodo(userInputText);
    }
    
});


function displayTodo(userInputText){
    let li = document.createElement("li");
    li.innerHTML = userInputText;

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.style.marginLeft = "20px";

    deleteBtn.addEventListener("click", deleteTodo);
    li.appendChild(deleteBtn);
    todoListContainer.appendChild(li);

    

    // clear the input field
    clearField();
};



function clearField(){
    userInput.value = "";
};


function deleteTodo(e){
    const currLi = e.target.parentElement;
    console.log(currLi);
    currLi.remove();
}
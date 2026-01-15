console.log("Todo List");


const userInput = document.querySelector("#userinput");
const addTodo = document.querySelector("#addtodo");
const todoListContainer = document.querySelector(".todoListContainer");

let todoBeingEdited = null;



addTodo.addEventListener("click", function(e){
    e.preventDefault();
    
    let userInputText = userInput.value;
    console.log(userInputText.length);
    if(userInputText.length === 0){
        alert("Input Feild can not be empty")
    } else{
        if(todoBeingEdited){
        todoBeingEdited.textContent = userInputText;
        todoBeingEdited = null;
        addTodo.textContent = "Add";
        clearField();
        return;
    }

        displayTodo(userInputText);
    }
    
});


function displayTodo(userInputText){
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerHTML = userInputText;

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.style.marginLeft = "20px";
    deleteBtn.addEventListener("click", deleteTodo);

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit Todo";
    editBtn.style.marginLeft = "10px";
    editBtn.addEventListener("click", editTodo);

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    todoListContainer.appendChild(li);
    // todoListContainer.appendChild(li);
    

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
};

function editTodo(e){
    const currTodoEdit = e.target.parentElement;
    console.log(currTodoEdit);
    const span = currTodoEdit.querySelector("span");
    userInput.value = span.textContent;
    todoBeingEdited = span;
    addTodo.textContent = "Update";

}
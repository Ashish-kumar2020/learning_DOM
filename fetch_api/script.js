console.log("Fetch API");

const todoFetch = document.querySelector("#todoFetch");
const todoList =  document.querySelector("#todoList");


const fetchApi = async () => {
  try {
    const response = await fetch("https://dummyjson.com/todos");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
     console.error("Error : ",error );
  }
};

todoFetch.addEventListener("click", async function () {
  const finalResult = await fetchApi();
  if(finalResult){
    todoList.innerHTML = "";
    finalResult.todos.forEach((todo) => {
        let li = document.createElement("li");
        li.textContent = todo.todo;
        li.dataset.id = todo.id;
        todoList.appendChild(li)
  });
    
  }

});


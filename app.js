//slectors
const todoInput =document.querySelector('.todo-input');
const todoButton =document.querySelector('.todo-button');
const todoList =document.querySelector('.todo-list');

//event Listeners
todoButton.addEventListener('click',addTodo);

// Functions
function addTodo(event){
    event.preventDefault(); 
    //todo div
    const tododiv= document.createElement("div");
    tododiv.classList.add("todo");
    //create li
    const newtodo =document.createElement('li');
    newtodo.innerText= 'hey';
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);
    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    tododiv.appendChild(completedButton) ;
    //chech trash button
    const trashButton = document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-trash"></i>';
    completedButton.classList.add('completed-btn');
    tododiv.appendChild(trashButton) ;
    //appent to list
    todoList.appendChild(tododiv);

}
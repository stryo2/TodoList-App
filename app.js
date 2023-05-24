//slectors
const todoInput =document.querySelector('.todo-input');
const todoButton =document.querySelector('.todo-button');
const todoList =document.querySelector('.todo-list');
const filterOption=document.querySelector('.filter-todo');
//event Listeners
document.addEventListener('DOMContentLoaded',getTodos); 
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);
// Functions
function addTodo(event){
    event.preventDefault(); 
    //todo div
    const tododiv= document.createElement("div");
    tododiv.classList.add('todo');
    //create li
    const newtodo =document.createElement('li');
    newtodo.innerText= todoInput.value;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);
    saveTodos(todoInput.value);
    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    tododiv.appendChild(completedButton) ;
    //chech trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML= '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    tododiv.appendChild(trashButton) ;
    //appent to list
    todoList.appendChild(tododiv);
    //clear to do input value;
    todoInput.value="";
}
function deleteCheck(e){
    const item=e.target;
    if(item.classList[0]==="trash-btn"){
        const todo=item.parentElement;
        removeLocalTodos(todo);
        todo.remove();
        
       /* todo.classList.add("rotate");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });*/ 
        //the code here doesnt work properly..needs to be fixed
    }
    if(item.classList[0]==='completed-btn'){
        item.parentElement.classList.toggle('completed');
    }
}
 function filterTodo(e){
    const todos=todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
        case "all":
            todo.style.display="flex";
            break;
        case "completed":
            if(todo.classList.contains('completed')){
                todo.style.display="flex";
            }
             else{
             todo.style.display="none";
             }
            break;
        case "uncompleted":
            if(!todo.classList.contains('completed')){
                todo.style.display="flex";
            }
            else{
            todo.style.display="none";
            }
            break;
    }});
 }
function  saveTodos(todo){
    let todos;
    if(localStorage.getItem('todos')==null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}
function getTodos(){
    let todos;
    if(localStorage.getItem('todos')==null){
        todos=[];
        }
         else{
            todos=JSON.parse(localStorage.getItem('todos'));
         }
    todos.forEach(function(todo){
        //todo div
        const tododiv= document.createElement("div");
        tododiv.classList.add('todo');
        //create li
        const newtodo =document.createElement('li');
        newtodo.innerText= todo;
        newtodo.classList.add('todo-item');
        tododiv.appendChild(newtodo);
        // check mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML= '<i class="fas fa-check"></i>';
        completedButton.classList.add("completed-btn");
        tododiv.appendChild(completedButton) ;
        //chech trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML= '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        tododiv.appendChild(trashButton) ;
        //appent to list
        todoList.appendChild(tododiv);
    });
}
function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos')==null){
        todos=[];
        }
        else{
            todos=JSON.parse(localStorage.getItem('todos'));
            }
          const todoIndex = todo.children[0].innerHTML;
          todos.splice(todos.indexOf(todoIndex),1);
          localStorage.setItem('todos',JSON.stringify(todos));
}

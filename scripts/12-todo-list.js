const todoList=[{
    name: 'make dinner',
    dueDate: '2023-05-23'},
    {
    name:'wash dishes',
    dueDate: '2023-05-24'}
];

renderTodoList();

function renderTodoList(){
   let todoListHTML='';

   todoList.forEach((todoObject, index) => {
  
     const {name}= todoObject;
     const {dueDate} = todoObject;
     const html = `
     <div class="todo-list">${name}</div>
     <div class="due-date" >${dueDate}</div>          
     <button class="delete-button" 
     ">Delete</button>
     `;
     todoListHTML += html;
   });   

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

   document.querySelectorAll('.delete-button').forEach((deleteButton, index)=>{
    deleteButton.addEventListener('click', ()=>{
        todoList.splice(index,1);
        renderTodoList();
    })
   })

}

document.querySelector('.js-add-button')
.addEventListener('click', () => {
 addTodo();
})

function addTodo(){
   const inputElement =  document.querySelector('.js-name-input');
   const name = inputElement.value;

   const dateInputElement = document.querySelector('.js-due-date-input');
  
   const dueDate = dateInputElement.value;
  
   todoList.push({
   // name: name,
    //dueDate: dueDate;
    name,
    dueDate
   });


   inputElement.value='';
   dateInputElement.value='';

   renderTodoList();
}
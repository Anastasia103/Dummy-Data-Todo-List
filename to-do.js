let toDoList = document.getElementById("todo-list")
let toDoList2 = document.getElementById("todo-list2")

let quantityId;

function setValueOf_User_ID(input) {
 quantityId = parseInt(input)
 console.log ({quantityId})
}


let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)

    console.log(isCompleteFilter)
}

const populateTodos = () => {
 //console.log('arrayOfTodos:', arrayOfTodos)
 arrayOfTodos.forEach (todo => {
    //todo is just referencing the arrayOfTodos.forEach could be named anything
    let newListItem = document.createElement('LI')
    // creating LI element
    let text = document.createTextNode(todo.id)
    //creating text which is inserted with the data in the json (todo is referencing the todo on line 28)
    newListItem.appendChild(text)
    //putting the text in the LI
    toDoList.appendChild(newListItem)
    //putting the LI in the OL ***line 34 and 36 the order is important
    

 })
 
}



const sortTodos = () => {
    const list = document.getElementById("todo-list");

   while (list.hasChildNodes()) {
  list.removeChild(list.firstChild);
}
const list2 = document.getElementById("todo-list2");

   while (list2.hasChildNodes()) {
  list2.removeChild(list2.firstChild);
}
    let isCompleteFilter = arrayOfTodos.filter(todo => {
        return todo.userId === quantityId
    })
    isCompleteFilter.forEach (todo => {
  
    let newListItem = document.createElement('LI')
    // creating LI element
    let text = document.createTextNode(todo.title)
    //creating text which is inserted with the data in the json (todo is referencing the todo on line 28)
    newListItem.appendChild(text)
    //putting the text in the LI
    if (todo.completed === true) {
    //putting the text in the LI
    toDoList.appendChild(newListItem)
    //putting the LI in the OL ***line 34 and 36 the order is important
    }
    else {
    //putting the text in the LI
        toDoList2.appendChild(newListItem)
    }
    console.log('isCompleteFilter:', isCompleteFilter)
    
    console.log('quantityID', quantityId)
})
    
}

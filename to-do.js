let toDoList = document.getElementById("todo-list")
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
}

const populateTodos = () => {
 //console.log('arrayOfTodos:', arrayOfTodos)
 arrayOfTodos.forEach (todo => {
    //todo is just referencing the arrayOfTodos.forEaach could be named anything
    let newListItem = document.createElement('LI')
    // creating LI element
    let text = document.createTextNode(todo.title)
    //creating text which is inserted with the data in the json (todo is referencing the todo on line 28)
    newListItem.appendChild(text)
    //putting the text in the LI
    toDoList.appendChild(newListItem)
    //putting the LI in the OL ***line 34 and 36 the order is important
 })
 
}
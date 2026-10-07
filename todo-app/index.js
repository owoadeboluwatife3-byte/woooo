const toDolist = document.getElementById('toDo')
const inputTask = document.getElementById('inputTask')
const addTaskBtn = document.getElementById('addTaskBtn')
const toDO = document.getElementById('toDO')

let toDoListArray = []

const displayTask = ()=>{
    toDO.innerHTML = ""
    toDoListArray.forEach((task)=>{
        const li = document.createElement('li')
        li.innerText = `${task.text}`
        toDO.append(li)

        const delBtn = document.createElement('button')
        delBtn.innerText = 'del'
        li.append(delBtn)
    })

}

// const addNewTask = (task)=>{
//     task = inputTask.value
//         
//     displayTask('task')
// }

addTaskBtn.addEventListener('click', ()=>{
    if(inputTask.value.trim() === '') {return}

    const newTodo = {
        id :Date.now(),
        text: inputTask.value.trim(),
    }

    toDoListArray = [...toDoListArray, newTodo]
    displayTask()
    inputTask.value = ''

    
})



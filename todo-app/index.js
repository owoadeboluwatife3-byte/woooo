        const todoInput = document.getElementById('todoInput');
         const addTodoBtn = document.getElementById('addTodoBtn');
         const displayTodos = document.getElementById('displayTodos')


         let todos = []

         const listTodos = () => {
             displayTodos.innerHTML =''

            todos.forEach((todo)=>{
                const li = document.createElement('li')
                li.innerText = `${todo.text}`
                displayTodos.append(li)

                const delBtn = document.createElement('button');
                delBtn.innerText = 'Del'
                 li.append(delBtn)

                 delBtn.addEventListener('click', ()=>{
                    deleteTodo(todo.id)

                 } )

            })
         }
            

         addTodoBtn.addEventListener('click', ()=>{
            if(todoInput.value.trim()==='') return
             
            const newTodo = {
                id:Date.now(),
                text:todoInput.value.trim()
            }

            todos = [...todos, newTodo]

            listTodos()

            todoInput.value = ''

        })


        const deleteTodo = (id) => {
            todos=todos.filter((todo)=> todo.id !== id)
            listTodos()
        }
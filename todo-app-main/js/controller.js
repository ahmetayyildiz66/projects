import * as model from './model.js'
import addTodoView from './views/addTodoView.js'
import todoView from './views/todoView.js'
import filterView from './views/filterView.js'

const handleNewTodo = function() {
    const query = addTodoView.getQuery()
    if (query) {
        const newTask = [{ id: model.state.todos.length + 1, task: query, status: 'incomplete' }]
        model.addNewTodo({ id: model.state.todos.length + 1, task: query, status: 'incomplete' })
        todoView.render(newTask)
    }
}

const handleTodoStatus = function(event) {
    if(event.target.className === 'check-btn') {
        const id = event.target.id.split('-')[1]
        model.updateStatus(id)
        const paragraphSibling = event.target.parentNode.querySelector('.todo-list__task');
        paragraphSibling.classList.toggle('todo-list--completed')
    }
    console.log('todos: ', model.state.todos)
}

const handleTodoFilter = function(event) {
    const parent = event.target.parentNode;
    Array.from(parent.children).forEach(item => {
        item.classList.remove('btn--active')
    })
    event.target.classList.add('btn--active')
    const btnId = event.target.id
    console.log('btnId: ', btnId)
    let status = ''
    if (btnId === 'btn-active') {
        status = 'incomplete'
    } else if (btnId === 'btn-completed') {
        status = 'completed'
    } else if (btnId === 'btn-all') {
        status = 'all'
    }
    if (status) {
        const todos = model.filterTodos(status)
        todoView.render(todos)
    }
}

const init = function() {
    addTodoView.addHandlerNewTodo(handleNewTodo)
    todoView.addHandlerToggleTodo(handleTodoStatus)
    filterView.filterTodosHandler(handleTodoFilter)
    todoView.render(model.state.todos)
}

init()
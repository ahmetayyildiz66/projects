import * as model from './model.js'
import addTodoView from './views/addTodoView.js'
import todoView from './views/todoView.js'
import filterView from './views/filterView.js'
import leftItemsView from './views/leftItemsView.js'

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
    } else if (event.target.className === 'todo-list__remove' || event.target.className?.baseVal === 'cross') {
        const id = event.target.id.split('-')[1] * 1
        model.removeTodo(id)
        todoView.render(model.state.todos)
    }
    calculateIncompleteTodos()
}

const handleTodoFilter = function(event) {
    const parent = event.target.parentNode;
    Array.from(parent.children).forEach(item => {
        item.classList.remove('btn--active')
    })
    event.target.classList.add('btn--active')
    const btnId = event.target.id

    let status = ''
    if (btnId === 'btn-active') {
        status = 'incomplete'
    } else if (btnId === 'btn-completed') {
        status = 'completed'
    } else if (btnId === 'btn-all') {
        status = 'all'
    } else if (btnId === 'btn-clear') {
        status = 'clear'
    }
    if (status) {
        const todos = model.filterTodos(status)
        todoView.render(todos)
    }
}

const calculateIncompleteTodos = function() {
    const length =  model.state.todos.filter(todo => todo.status === 'incomplete').length
    leftItemsView.render(length)
}

const init = function() {
    addTodoView.addHandlerNewTodo(handleNewTodo)
    todoView.addHandlerToggleTodo(handleTodoStatus)
    filterView.filterTodosHandler(handleTodoFilter)
    todoView.render(model.state.todos)

    calculateIncompleteTodos()
}

init()
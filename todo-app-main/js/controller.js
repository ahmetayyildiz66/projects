import * as model from './model.js'
import addTodoView from './views/addTodoView.js'
import todoView from './views/todoView.js'

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

const init = function() {
    addTodoView.addHandlerNewTodo(handleNewTodo)
    todoView.addHandlerToggleTodo(handleTodoStatus)
    todoView.render(model.state.todos)
}

init()
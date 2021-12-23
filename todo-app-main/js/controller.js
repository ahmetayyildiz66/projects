import { state } from './model.js'
import addTodoView from './views/addTodoView.js'
import todoView from './views/todoView.js'

const handleNewTodo = function() {
    const query = addTodoView.getQuery()
}

const init = function() {
    addTodoView.addHandlerNewTodo(handleNewTodo)
    todoView.render(state.todos)
}

init()
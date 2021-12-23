export const state = {
    todos: [
        {
            id: 1,
            task: 'Complete online JavaScript course',
            status: 'incomplete'
        },
        {
            id: 2,
            task: 'Jog around the park 3x',
            status: 'incomplete'
        },
        {
            id: 3,
            task: '10 minutes meditation',
            status: 'incomplete'
        },
        {
            id: 4,
            task: 'Read for 1 hour',
            status: 'incomplete'
        },
        {
            id: 5,
            task: 'Pick up groceries',
            status: 'incomplete'
        },
        {
            id: 6,
            task: 'Complete Todo App on Frontend Mentor',
            status: 'incomplete'
        },
    ]
}

export const addNewTodo = function(newTask) {
    state.todos.push(newTask)
}

export const updateStatus = function(id) {
    const todo = state.todos.find(todo => todo.id === id * 1 )
    const { status } = todo
    if (status === 'incomplete') {
        todo.status = 'completed'
    } else {
        todo.status = 'incomplete'
    }
}

export const filterTodos = function(status) {
    if (status === 'all') return state.todos
    if (status === 'clear') return state.todos = state.todos.filter(todo => todo.status !== 'completed')
    return state.todos.filter(todo => todo.status === status)
}
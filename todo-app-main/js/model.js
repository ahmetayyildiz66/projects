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
class AddTodoView {
    _parentElement = document.querySelector('.todo__create')

    getQuery() {
        const query = this._parentElement.querySelector('.input-text').value
        this._clearInput()
        return query
    }

    _clearInput() {
        this._parentElement.querySelector('.input-text').value = ''
        this._parentElement.querySelector('#addNewTask').checked = false
    }

    addHandlerNewTodo(handler) {
        const checkbox = this._parentElement.querySelector('#addNewTask')
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                handler()
            }
        })
    }
}

export default new AddTodoView()
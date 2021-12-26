class FilterView {
    _btnGroup = document.querySelector('.button-group')
    _btnClear = document.getElementById('btn-clear')
    _todoList = document.querySelector('.todo-list')

    _clear() {
        this._todoList.innerHTML = ''
    }

    filterTodosHandler(handler) {
        this._btnGroup.addEventListener('click', (e) => {
            if(e.target.id) {
                this._clear()
                handler(e)
            }
        })
    }
}

export default new FilterView();
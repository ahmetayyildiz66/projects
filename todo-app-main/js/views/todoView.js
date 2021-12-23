class TodoView {
    _data;
    _todoList = document.querySelector('.todo-list')

    _clear() {
        this._todoList.innerHTML = ''
    }

    render(data) {
        this._data = data;
        const markup = this._generateMarkup()
        this._todoList.insertAdjacentHTML('afterbegin', markup)
    }

    addHandlerToggleTodo(handler) {
        this._todoList.addEventListener('click', e => {
            handler(e)
        })
    }

    _generateMarkup() {
        return this._data.map((item) => {
            return `
                <li class="todo-list__item u-mr-medium">
                    <input type="checkbox" ${item.status === 'completed' ? 'checked' : ''} id="check-${item.id}" class="check-btn">
                    <label for="check-${item.id}" class="check__label u-mr-medium">
                    <span class="check__span"></span>
                    </label>
                    <p class="todo-list__task ${item.status === 'completed' ? 'todo-list--completed': ''}">${item.task}</p>
                </li>
                <div class="separator">&nbsp;</div>
            `;
        }).join('')
    }
}

export default new TodoView()
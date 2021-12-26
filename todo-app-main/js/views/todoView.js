class TodoView {
    _data;
    _todoList = document.querySelector('.todo-list')

    _clear() {
        this._todoList.innerHTML = ''
    }

    render(data) {
        this._clear()
        this._data = data;
        const markup = this._generateMarkup()
        this._todoList.insertAdjacentHTML('afterbegin', markup)
    }

    addHandlerToggleTodo(handler) {
        this._todoList.addEventListener('click', e => {
            handler(e)
        })
    }

    dragStartHandler(handler) {
        this._todoList.addEventListener('dragstart', (e) => {
            handler(e)
        })
    }

    dragEndHandler(handler) {
        this._todoList.addEventListener('dragend', (e) => {
            handler(e)
        })
    }

    dragOverHandler(handler) {
        this._todoList.addEventListener('dragenter', (e) => {
            const draggables = document.querySelectorAll('.draggable:not(.dragging)')
            const dragging = document.querySelector('.dragging')
            const draggablesArr = [...draggables]
            e.target.style.cursor = 'move'
            e.preventDefault() // by default dropping inside of an element is disabled look at the cursor closely
            handler(e, this._todoList, draggablesArr, dragging)
        })
    }

    _generateMarkup() {
        return this._data.map((item) => {
            return `
                <li class="todo-list__item draggable" draggable="true">
                    <input type="checkbox" ${item.status === 'completed' ? 'checked' : ''} id="check-${item.id}" class="check-btn">
                    <label for="check-${item.id}" class="check__label u-mr-medium">
                    <span class="check__span"></span>
                    </label>
                    <p class="todo-list__task ${item.status === 'completed' ? 'todo-list--completed': ''}">${item.task}</p>
                    <span class="u-ml-auto todo-list__remove" id="span-${item.id}">
                        <svg class="cross" id="cross-${item.id}" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                    </span>
                </li>
                <div class="separator">&nbsp;</div>
            `;
        }).join('')
    }
}

export default new TodoView()
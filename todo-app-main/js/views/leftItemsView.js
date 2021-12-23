class IncompleteItems {
    _incompleteItems = document.getElementById('left-items')

    render(length) {
        this._incompleteItems.innerHTML = `${length} items left`
    }
}

export default new IncompleteItems()
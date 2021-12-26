class ThemeView {
    _themeSwitch = document.querySelector('.theme-switcher')

    switchThemeHandler(handler) {
        this._themeSwitch.addEventListener('click', event => {
            handler(event)
        })
    }

    getIcons() {
        return this._themeSwitch.children
    }
}

export default new ThemeView();
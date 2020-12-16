function BaseView() {
    this.rootElement = document.createElement('div');
}

BaseView.prototype.show = function (element) {
    this.beforeRender();
    this.rootElement.innerHTML = this.render();
    this.rootElement.classList.add(this.className);
    element.appendChild(this.rootElement);
    this.afterRender();
}

BaseView.prototype.reRender = function () {
    this.rootElement.innerHTML = this.render();
}

BaseView.prototype.beforeRender = function () {};
BaseView.prototype.afterRender = function () {};
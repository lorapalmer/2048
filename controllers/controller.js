function Controller() {
    this.matrixModel = new MatrixModel();
}

Controller.prototype.onKeyPress = function (event) {
    var key;

    switch (event.keyCode) {
        case 38:
            key = 'up';
            break;
        case 40:
            key = 'down';
            break;
        case 39:
            key = 'right';
            break;
        case 37:
            key = 'left';
            break;
        default:
            return;
    }

    this.matrixModel.displayActionResults(key);
}

Controller.prototype.onClickNewGame = function () {
    this.matrixModel.startNewGame();
}
function MatrixModel() {
    BaseModel.call(this);
    this.attributes = {
        size: {width: 4, height: 4},
        grid: [
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', '']
        ]
    }

    var instance = this;
    MatrixModel = function () {
        return instance;
    }

    this.initAction();
}

MatrixModel.prototype = Object.create(BaseModel.prototype);
MatrixModel.prototype.constructor = MatrixModel;

MatrixModel.prototype.initAction = function () {
    this.attributes.grid[randomCell()][randomCell()] = randomCellValue();
    // TODO: prevent override

    this.publish('changeData');
}

MatrixModel.prototype.moveUp = function () {

}

MatrixModel.prototype.moveDown = function () {

}

MatrixModel.prototype.moveRight = function () {

}

MatrixModel.prototype.moveLeft = function () {

}

MatrixModel.prototype.displayActionResults = function (key) {
    switch (key) {
        case 'up':
            this.moveUp();
            break;
        case 40:
            this.moveDown();
            break;
        case 39:
            this.moveRight();
            break;
        case 37:
            this.moveLeft();
            break;
        default:
            return;
    }
    this.publish('changeData');
}

MatrixModel.prototype.startNewGame = function () {
    console.log('start');
}

// ['2', '', '4', ''],
// ['', '', '2', '4'] - right
// ['2', '4', '', ''] - left

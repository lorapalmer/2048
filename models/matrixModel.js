function MatrixModel() {
    BaseModel.call(this);
    this.attributes = {
        size: { width: 4, height: 4 },
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

    let firstInitialAdress = {
        row: randomCell(),
        cell: randomCell()

    };
    let secondInitialAdress = {
        row: randomCell(),
        cell: randomCell()
    }

    while (firstInitialAdress.row === secondInitialAdress.row && firstInitialAdress.cell === secondInitialAdress.cell) {
        secondInitialAdress = {
            row: randomCell(),
            cell: randomCell()
        }
    }

    this.attributes.grid[firstInitialAdress.row][firstInitialAdress.cell] = randomCellValue();
    this.attributes.grid[secondInitialAdress.row][secondInitialAdress.cell] = randomCellValue();

    this.publish('changeData');
}

MatrixModel.prototype.moveUp = function () {

}

MatrixModel.prototype.moveDown = function () {

}

MatrixModel.prototype.moveRight = function () {
    var newRow = [],
        key,
        newRow,
        len,
        i;
    for (key in this.attributes.grid) {
        newRow = this.attributes.grid[key].filter(elem => elem);
        len = this.attributes.size.width - newRow.length;
        for (i = 0; i < len; i++) {
            newRow.unshift("");
        };
        this.attributes.grid[key] = newRow;
    }
}

MatrixModel.prototype.moveLeft = function () {
    var newRow = [],
        key,
        newRow,
        len,
        i;
    for (key in this.attributes.grid) {
        newRow = this.attributes.grid[key].filter(elem => elem);
        len = this.attributes.size.width - newRow.length;
        for (i = 0; i < len; i++) {
            newRow.push("");
        };
        this.attributes.grid[key] = newRow;
    }
}

MatrixModel.prototype.displayActionResults = function (key) {
    switch (key) {
        case 'up':
            this.moveUp();
            break;
        case 'down':
            this.moveDown();
            break;
        case 'right':
            this.moveRight();
            break;
        case 'left':
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
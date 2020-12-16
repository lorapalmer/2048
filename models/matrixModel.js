function MatrixModel() {
    BaseModel.call(this);
    this.attributes = {
        size: { width: 4, height: 4},
        grid: [
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', '']
        ]
    }
}

MatrixModel.prototype = Object.create(BaseModel.prototype);
MatrixModel.prototype.constructor = MatrixModel;

MatrixModel.prototype.changeMatrix = function () {
    this.attributes.grid[0][0] = '2';
    this.publish('changeData');
}


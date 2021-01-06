function templateStr(tplString, attributes) {
    for(var i in attributes) {
        if(attributes.hasOwnProperty(i)) {
            tplString = tplString.replace('{{' + i + '}}', attributes[i]);
        }
    }
    return tplString;
}

function randomCell() {
    return Math.floor(Math.random() * 4);
}

function randomCellValue() {
    return Math.random() < 0.9 ? 2 : 4;
}
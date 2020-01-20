document.write('</br>');
function createNewShape(config) {
    var newShape = {
        color: 'black',
        height: 50,
        width: 80
    };
    if (config.height) {
        newShape.height = config.height;
    }
    if (config.width) {
        newShape.width = config.width;
    }
    if (config.color) {
        newShape.color = config.color;
    }
    return newShape;
}
var newShape = createNewShape({ color: 'blue', width: 30 });
document.write(newShape.color);
document.write('<br>');
document.write(newShape.width.toString());
document.write('<br>');
document.write(newShape.height.toString());
document.write('<hr>');
var rule = { definition: 'Never change me' };
document.write(rule.definition);
document.write('<hr>');

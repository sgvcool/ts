function helloWorld(person) {
    return "Hellow, " + person;
}
var user = "USER";
document.body.innerHTML = helloWorld(user);
var isDone = false;
var isDone2 = true;
var num = 4;
var octal = 484;
var hex = 0xf00d;
var color = 'FFF';
var color2 = "FFF";
var color3 = "color " + user;
var arr = ['1', '2', '4'];
var arr2 = [1, 2, 5, 6];
var arr3 = [1, 2, 5, 6];
var tupleTypeArray;
tupleTypeArray = ['fgfg', 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Black"] = 2] = "Black";
    Color[Color["White"] = 3] = "White";
})(Color || (Color = {}));
;
var c = Color.Red;
var color0 = Color[1];
document.body.innerHTML += ' ' + color0;
var m = '4';
m = 4;
m = ['3'];
function showMessage(message) {
    document.body.innerHTML = message;
}
showMessage('bla bla bla shown');
function isShown() {
    return true;
}

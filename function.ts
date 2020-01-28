/*function add(a, b){
    return a+b;
}*/

/*let sum = function add(a, b){
    return a+b;
};*/
//sum(3,6);
//document.write(sum(3,6));


function add(a:number, b:number):number{
    return a+b;
}

/*let sum = add(4,6);
document.write(sum.toString());*/
document.write('<hr>');

let addition = (c:number, d:number, e?:number):number =>{
    return c+d+e;
};
let sum1 = addition(5,8);
let sum2 = addition(5,8,3);

document.write(sum1.toString());
document.write('<hr>');

document.write(sum2.toString());
document.write('<hr>');

let resStr = (f:string, g:string):string =>{
    return `${f} and ${g}`;
};

document.write(resStr('dsdsd', 'gggggggg'));
document.write('<hr>');
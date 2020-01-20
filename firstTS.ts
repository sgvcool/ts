function helloWorld(person){
  return "Hellow, " + person;
}

let user = "USER";
document.body.innerHTML=helloWorld(user);

let isDone : boolean = false;
let isDone2 : boolean = true;

let num : number = 4;
let octal : number = 0o744;
let hex : number = 0xf00d;

let color : string = 'FFF';
let color2 : string = "FFF";
let color3 : string = `color ${user}`;

let arr : string[] = ['1','2','4'];
let arr2 : number[] = [1,2,5,6];
let arr3 : Array<number> = [1,2,5,6];

let tupleTypeArray : [string, number];
tupleTypeArray  = ['fgfg', 3];

enum Color{Red = 1, Black = 2, White = 3};
let c: Color = Color.Red;
let color0 : string = Color[1];

document.body.innerHTML += ' '+ color0;

let m : any = '4';
m = 4;
m = ['3'];

function showMessage(message : string) : void{
  document.body.innerHTML = message;
}

showMessage('bla bla bla have shown!');

function isShown() : boolean{
  return true;
}
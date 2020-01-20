document.write('</br>');

interface ShapeConfig {
  color? : string,
  height? : number,
  width? : number,
}

function createNewShape(config: ShapeConfig):{color: string, height: number, width: number}{

  let newShape = {
    color: 'black', 
    height: 50, 
    width: 80, 
  }

  if(config.height){
    newShape.height = config.height;
  }

  if(config.width){
    newShape.width = config.width;
  }

  if(config.color){
    newShape.color = config.color;
  }

  return newShape;
}

let newShape = createNewShape({color:'blue', width: 30});

document.write(newShape.color);
document.write('<br>');
document.write(newShape.width.toString());
document.write('<br>');
document.write(newShape.height.toString());
document.write('<br>');
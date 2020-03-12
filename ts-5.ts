// 类型推断

let xs = [0, 1, null]

class Animal  {
  numLegs: number
}
class Bee extends Animal {

}
class Lion extends Animal {

}

// let zoo: Animal= [new Bee(), new Lion()]

window.onmousedown = function (mouseEvent: any) {
  console.log(mouseEvent.clickTIme)
}

function createZoo(): Animal[]{
  return [new Bee(), new Lion()]
}

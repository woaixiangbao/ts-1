// let passcode = 'secret 3passcode'

// class Employee{
//   private _fullName: string
//   get fullName(): string {
//     return this._fullName
//   }

//   set fullName(newName: string) {
//     if (passcode && passcode === 'secret passcode') {
//       this._fullName = newName
//     } else {
//       console.log('Error: Unauthorized update of employee!')
//     }
//   }
// }
// let employee = new Employee();
// employee.fullName = 'Bob Smith'
// if (employee.fullName) {
//   console.log(employee.fullName)
// }

class Grid {
  static origin = {x: 0, y: 0}

  scale: number
  constructor(scale: number) {
    this.scale = scale
  }
  calculateDistanceFromOrigin(point: {x: number; y: number}) {
    let xDist = point.x - Grid.origin.x
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
  }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({x: 3, y: 4}));
console.log(grid2.calculateDistanceFromOrigin({x: 3, y: 4}));



function identity<T>(arg: T):T {
  return arg
}
// let output = identity<string>('myString')

let output = identity('myString')

function loggingIndentity<T>(arg:T[]): T[]{
  console.log(arg.length)
  return arg;
}
interface GericIdentityFn<T> {
  (arg: T): T
}

let myIdentity: GericIdentityFn<number> = identity

// class GenericNumber<T> {
//   zeroValue: T 
//   add: (x: T, y: T) => T
// }

// let myGenricNumber = new GenericNumber<number>()
// myGenricNumber.zeroValue = 0
// myGenricNumber.add = function(x, y){
//   return x + y
// }

interface Lengthwise {
  length: number
}

function logginIn <T extends Lengthwise>(arg: T): T{
  console.log(arg.length)
  return arg
}

function getProperty <T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let x = {a: 1, b: 2, c: 3, d: 4}
getProperty(x, 'a')
// getProperty(x, 'u') // 报错

// 工厂函数
function create<T>(c: {new():T}): T {
  return new c()
}

// class BeeKeeper {
//   hasMask: boolean
// }

// class LionKeeper {
//   nametag: string
// }
// class Animal {
//   numLengs: number
// }


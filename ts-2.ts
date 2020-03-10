abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('roaming the earth...')
  }
}

abstract class Department {
  name: string
  constructor(name: string) {
    this.name = name
  }
  printName(): void{
    console.log('Department name' + this.name);
  }
  abstract printMeeting(): void
}

class AccountingDepartment extends Department{
  constructor() {
    super('Accounting ad Auditing')
  }
  printMeeting():void{
    console.log('the Account department meets each Monday at 10am')
  }
  genteratReports():void {
    console.log('生成报告')
  }
}

let department: Department
department = new AccountingDepartment()

department.printName()
department.printMeeting()
// department.genteratReports()  这个会报错

class Greeter {
  static standardGreeting = 'Hello, there'
  greeting: string
  constructor(message?: string) {
    this.greeting = message || ''
  }
  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting
    } else {
      return Greeter.standardGreeting
    }
  }
}

let greeter: Greeter
greeter = new Greeter()
console.log(greeter.greet())

let greeterMaker: typeof Greeter = Greeter
greeterMaker.standardGreeting = 'Hey there'
let greeter2: Greeter = new greeterMaker()
console.log(greeter2.greet())



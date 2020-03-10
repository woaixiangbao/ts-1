function add(x: number, y: number): number {
  return x + y
}
let myAdd: (baseValue: number, increment: number) => number = function(x:number, y: number): number {
  return x + y 
}

function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}
let result1 = buildName('bob')
// let result2 = buildName('bod', 'dsd', 'd') 报错
let result3 = buildName('dfd', 'dfsdf');


interface Card {
  suit: string
  card: number
}
interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(this: Deck): () => Card
}


let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
}
let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()
console.log('card:' + pickedCard.card + ' of ' + pickedCard.suit)
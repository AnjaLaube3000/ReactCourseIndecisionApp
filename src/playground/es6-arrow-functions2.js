const multipliers = {
  numbers: [3, 15, 66],
  multiyplyBy: 4,
  multiply() {
    return this.numbers.map((number) => number * this.multiyplyBy)
  }
}

console.log(multipliers.multiply())

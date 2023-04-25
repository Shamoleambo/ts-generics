class DataStorage<T extends string | number | boolean> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    this.data.splice(this.data.lastIndexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Mano')
textStorage.addItem('Vacilão')
console.log(textStorage.getItems())
textStorage.removeItem('Vacilão')
console.log(textStorage.getItems())

const numbersStorage = new DataStorage<number>()
numbersStorage.addItem(1)
numbersStorage.addItem(2)
numbersStorage.addItem(3)
console.log(numbersStorage.getItems())
numbersStorage.removeItem(3)
console.log(numbersStorage.getItems())

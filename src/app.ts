function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const obj = merge({ name: 'mano' }, { age: 27 })
const obj2 = merge({ name: 'truta' }, { age: 22 })
console.log(obj.name)
console.log(obj2.name)

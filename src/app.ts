interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = 'Got no elements'
  if (element.length === 1) description = 'Got 1 element'
  else if (element.length > 1) description = `Got ${element.length} elements`
  return [element, description]
}

console.log(countAndDescribe('Hello there!'))
console.log(countAndDescribe(['Sports', 'Videogames']))

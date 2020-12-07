import { randomArray } from './helpers.js'
import { swap } from './helpers.js'

// const a = randomArray(3, 10)

const a = [5, 8, 10, 9]

swap(a, 0, 1) // byter plats på a[1] och a[3]

console.log(a) // [5, 9, 10, 8]

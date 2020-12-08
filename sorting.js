import { randomArray, swap } from './helpers.js'

const b = randomArray(100, 10)


function bubblesort(arr){
    
    for (let i = 1; i < arr.length; i++) {
    
        for (let j = 0; j < arr.length - 1; j++) {
    
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, (j + 1))
            }
        }
    }
}

bubblesort(b)

console.log(b)

/* eslint-disable complexity */
let test1 = [7, 1, 2, 9, 6] // expect (7, 9)
let test2 = [7, 1, 2, 9, 8] // expect (7, 2, 8)
let test3 = [7, 1, 2, 9, 6, 3] // expect (7, 9, 3)
let test4 = [1] // expect 0

// BELOW IS FIRST ATTEMPT AT SOLVING (45 minutes)
// while optimal in space and time complexity Time = 0(n) | Space 0(1)
// the code is not optimal in logic and can be refactored to be made more simple and readable  (Below is optimized solution)

// function maxSubsetSumNoAdjacent(array) {
//   if (array.length < 3){
//     return 'less than 3 nums total: ' + 0
//   }
//   let currentInd = 1
//   let highest = array[0]
//   let highestInd = 0
//   let pH = 0
//   let pHind = 0

//   while (currentInd < array.length){
//     let num = array[currentInd]
//     if (num + highest > highest && Math.abs(currentInd - highestInd) !== 1){
//        pH = highest
//        pHind = highestInd
//        highest = num + highest
//        highestInd = currentInd
//     } else if (num + pH > highest && Math.abs(currentInd - pHind) !== 1){
//         let temp = num + pH
//         pH = highest
//         pHind = highestInd
//         highest = temp
//         highestInd = currentInd
//     } else if (highest > num + pH > pH && Math.abs(currentInd - pHind) !== 1){
//       pH = num + pH
//       pHind = currentInd
//     } else if (num > highest){
//           pH = highest
//           pHind = highestInd
//           highest = num
//           highestInd = currentInd
//     } else if (num > pH){
//           pH = num
//           pHind = currentInd
//     }
//     currentInd++
//   }
// return highest
// }

/*
take current number
set it as highest
record index as highest index
then take next number
if index of next +1 or -1 of highest then cant add


-- go through
== can we add highest so far to this number
== can we had previous highest
== if not can we add original to this number and is it highest


-- could think of pushing values into an array
*/
//OPTIMIZED LOGIC and complexity
function maxSubsetSumNoAdjacent(array) {
  if (array.length < 1){
    return 0
  }
  if (array.length === 1){
    return array[0]
  }
  let currentInd = 2
  let first = Math.max(array[0], array[1])
  let second = array[0]

  while (currentInd < array.length){
    let current = Math.max(first, second + array[currentInd])
    second = first
    first = current

    currentInd++
  }
return first
}

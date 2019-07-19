//Given Number  N and array of denominations, find number of ways to make change of N using denoms.
// EG 6 [1, 5] = 2 (5 x 1 + 1 x 1, 6 x 1)

let coins = [1, 5, 10, 25]
let test1 = 1 //expect 1   1x1
let test2 = 9 //expect 2   1x9,  1x9, 5x1
let test3 = 12 //expect 4  1x12, 1x7 + 5x1, 1x2 + 5x2, 10x1 + 1 x 2
let test4 = 25 // expect 12         1x25, 1x20 + 5x1, 1x15 + 5x2, 1x15 + 10x1, 1x10 + 5x3, 1x10 + 10x1 + 5x1, 1x5 + 10x2 , 1x5 + 5x4, 1x5 + 10x1 + 5x2, 5x5, 10x2 + 5x1, 25x1


let test3 = 12 //expect 4  1x12, 1x7 + 5x1, 1x2 + 5x2, 10x1 + 1 x 2


function numberOfWaysToMakeChange(n, denoms) {

let ways = []
while (ways.length <= n){
  ways.push(0)
}
ways[0] = 1
for (let i = 0; i < denoms.length; i++){
  let coin  = denoms[i]


  for (let j = 0; j <= n; j++){
    if (coin <= j){
      ways[j] += ways[j - coin]
    }
    }

  }
console.log(ways)
return ways[n]
}

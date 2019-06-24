/* Given a string return the number of possible palindromes, incluiding substrings.
 For example, given 'aaa' return 6. Possible palindromes ['a', 'a', 'a', 'aa', 'aa', 'aaa']. */

let example = 'abba' // [a, b, b, a, bb, abba]

function palindrome(str){
  // even and odds => odd: there can only be 1 unique char, even there are no unique chars
  // pick 1  - add to array
    /*
    b
    rp +1  bb
    lp +1  abb
    rp + abba
    b rp+1 ba
    lp -1 bb
    center b
    lp center -1 = > a
    rp center +1 => b



     D E D E G  => a, b, c, d, e, ded, ede, g => 8



    if helper = true push original stack to result

     d --> push
      C = 1
      PUSH THE STACK
     d e
      c = 2
      DONT PUSH
    d e d
      c = 3
      if curr = next count - 2
      c = 1
      push the stack

    d e d e
      c = 4
      dont

    d e d e d
     c = 5
     if curr = next -2
     if curr = next
     d e d ==> e  c1
     d e d e => count = 4


    */


    let result = []

    for(let i = 0; i < str.length; i++) {
      let current = str[i]
      let stack = [current]
      result.push(current);

      for(let j = i + 1; j < str.length; j++) {
          let next = str[j]
          stack.push(next)
          if (helper(stack) === true){
            result.push(stack)
          }
      }
    }
}

function helper(stack){
  if (stack.length === 1 || stack.length === 0){
    return true
  }
  if (stack[0] === stack[stack.length-1]){
    let newStack = stack.slice(1, stack.length-2)
    return helper(newStack)
  }
  return false
}

palindrome('abba')

// [1,2] ==> [[],[1],[2],[1,2]]
// [1,2,3] ==> [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
//  1,2,3,4 ==> 1 . 2 . 3 . 4 . 12 . 13 . 14 . 23 . 24 . 34 . 123 . 124 . 134 . 234 . 1234
function powerset(array) {
  // takes the first

  let result = [[]]
  let set = [...array]

  let counter = 0

  while (counter < array.length){

    helper2(set[0], set.slice(1), [set[0]])
  }
  return result
}


function helper2(first, rest, current){
  // first = [1]
  // rest = [2]
  // current = []

  if (current.length < rest.length+1){
    let current = [...current + rest[current.length] ]
    result.push(current)
    return helper2(first, rest, current)
  } else {
    //add first the the end, and move to the next index
    rest.push(first)
    first = rest[0]
    rest = rest.slice(1)
    current = [first]
    counter++
    return helper2(first, rest, current)
  }


}


function sequence(num, hash = {}){
  while (true){
    if (hash.num){
      return Object.values(hash).length
    }
    hash.num = true
    let sum = 0
     for (let i = 0; i < num.length; i++){
       sum +=  (num[i]**2)
     }
    num = sum
  }
}

// potions
function mixPotions(array){

  let volume = 0
  let hash = {}
  for(let i = 0; i < array.length; i++){
    let potion = array[i]
    let ingredients = potion.ingredients
    volume += potion.volume
    for (let key in ingredients){
      let concentration = ingredients[key] * potion.volume
      if (hash[key]){
        hash[key] = hash[key] + concentration
      }
      else {
        hash[key] = concentration
      }
    }
  }
  for(let key in hash){
    hash[key] = hash[key] / volume
  }
 return hash
}
mixPotions([
    {volume: 200,
ingredients: { ingredient1: 50, ingredient2: 20, ingredientA: 500 }}, {volume: 600,
ingredients: { ingredient1: 150, ingredientA: 300, ingredientB: 950 }}, ])

//The above should return:
// { volume: 400,
// ingredients: { ingredient1: 125, ingredient2: 5, ingredientA: 350,
// ingredientB: 712.5 } }

function sortColumns(str){
  let table = []
  let array = []
  let rows = str.split('\n')
  let numRows = rows.length
  rows = rows.toString()
  let newRows = rows.split(',')
  let entriesPerRow = newRows.length / numRows

  for (let i = 0; i < newRows.length; i++){
    if (i < entriesPerRow){
      array.push([newRows[i]])
    } else {
      let num = i % 6
      // console.log(array)
      array[num].push(newRows[i])
    }
  }
  array.sort((a, b) => {
    let nameA = a[0]
    let nameB = b[0]
    nameA = nameA.toUpperCase()
    nameB = nameB.toUpperCase()

     if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
  })
  let result = ''
  for (let i = 0; i < numRows; i++){
    array.forEach(index => {
      result += index[i] + ","
    })
}
  return result.slice(0, result.length-1)
}

sortColumns("steve,Andrew,michael,Yamuna,Harrison,Leslie\n3112,21352,123412,14134,1235,51325\n2,6,3,4,1,5")
//expect 'Andrew,Harrison,Leslie,michael,steve,Yamuna,21352,1235,51325,123412,3112,14134,6,1,5,3,2,4'

function blindMice(str){
  //get location of cheese and split array before cheese and after cheese
  let arr = str.split("")
  let cheeseIndex = arr.indexOf('C') //9
  let leftOf = arr.slice(0, cheeseIndex)
  let rightOf = arr.slice(cheeseIndex + 1)

  let counter = 0
  //set stack for left side fo cheese
  let stack = []
  for (let i = 0; i < leftOf.length; i++){
    let char = leftOf[i]
    if (char === '~' || char === 'M'){
      stack.push(char)
    }
    if (stack.length === 2){
      if (stack[1] === "~"){
        counter++
        stack = []
      } else {
        stack = []
      }
    }
  }
  //reset stack for right side of cheese
  stack = []
  for (let j = 0; j < rightOf.length; j++){
    let char = rightOf[j]
    if (char === '~' || char === 'M'){
      stack.push(char)
    }
    if (stack.length === 2){
      if (stack[1] === "M"){
        counter++
        stack = []
      } else {
        stack = []
      }
    }
  }
  return counter

}

blindMice("M~ M~ ~M ~M M~ ~M M~ C ~M M~ ~M ~M")
// expect 7
blindMice("C  M~ ~M ~M")
//expect 2
blindMice("  M~ ~M ~M C")
// expect 2
blindMice("  M~ ~M ~M C ~M ~M ~M")
// expect 4


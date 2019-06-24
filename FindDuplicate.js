

// optimize time
function findRepeat(arr) {

  let hash = {}

  for (let i = 0; i < arr.length; i++){

    let num = arr[i]

    if (hash[num]){
      return num
    }else{
      hash[num] = true
    }
  }
  return 'no duplicates'
}

//optimize space
// First Double Loop  n2 time

function findRepeat(arr) {
  for (let i = 0; i < arr.length; i++){
    let num = arr[i]
    for (let j = i+1; j < arr.length; j++){
      let num2 = arr[j]
      if (num === num2){
        return num
      }
    }
  }
  return 'no duplicates'
}

// One Pass thru

// sort it

  function findRepeat(arr) {
  let sorted = arr.sort()

  let num1 = 0
  let num2 = 1

  while (num1 < sorted.length || num2 < sorted.length){

    if (sorted[num1] === sorted[num2]){
      return num1
    }
    if (sorted[num1] < sorted[num2]){
      num1 += 2
    } else {
      num2 += 3
    }

  }
  return "no duplicate"
}



let test1 = [1, 2, 3, 4]
let test2 = [1, 2, [3, 4]]

function productSum(array, level = 1){
  let value = 1
  let level = level
  for (let i = 0; i < array.length; i++){
    let index = array[i]

    if (typeof index === Number){
      value += (index * level)
    } else {
      value += productSum(index, 2)
    }

  }
  return value
}




function kadanesAlgorithm(array) {

  let max = array[0]

  let startIndex = 0
  let endIndex = 1
  let arrayMax = [array[0]]

  for (let i = 1; i < array.length; i++){
    let cont = array[i] + arrayMax[i-1];
    let restart = array[i]


    let temp = Math.max(cont, restart)
    arrayMax.push(temp)
    if (temp > max){
      max = temp
      endIndex = i
    }


  }
return max
}

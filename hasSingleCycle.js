let test = [2, 3, 1, -4,-4,2]

function hasSingleCycle(array){

  let hash = {}
  let next = 0
  for (let i = 0; i<array.length; i++){

    let startNum = array[i];
    let landingSpot = (startNum + i) % array.length

    if (array[i] < 0){
      landingSpot = ((i - startNum) + array.length) % array.length
    }

    if (!hash[landingSpot]){
     hash[landingSpot] = true
    } else {
      return false
    }
  }
  return true
}

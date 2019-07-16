

function smallestDifference(arrOne,arrTwo){

  let sort1 = arrOne.sort((a, b) => a - b)
  let sort2 = arrTwo.sort((a, b) => a - b)


  let smallest = Infinity
  let rtn = [0, 0]

  let s1c = 0
  let s2c = 0
  while (s1c < sort1.length && s2c < sort2.length){

    if (sort1[s1c] === sort2[s2c]){
      return [sort1[s1c], sort2[s2c]]
    }
    let difference = Math.abs(sort1[s1c] - sort2[s2c])
    if (difference < smallest){
      smallest = difference
      rtn = [sort1[s1c], sort2[s2c]]
    }
    if (sort1[s1c] > sort2[s2c]){
      if (s2c < sort2.length){
        s2c++
      } else {
        s1c++
      }
    } else {
      if (s1c < sort1.length){
        s1c++
      } else {
        s2c++
      }
    }
  }
return rtn
}

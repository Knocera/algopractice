function minNumberOfCoinsForChange(n, denoms) {
  let ways = []
  while (ways.length <= n){
    ways.push(0)
  }
  let divisable = false
	denoms.sort((a,b)=>a-b)



  for (let i = 0; i < denoms.length; i++){
    let coin = denoms[i]
    if (n % coin === 0){
      divisable = true
    }
    let coinCount = 0
    for (let j = 0; j <= n; j++){

      if (j % coin === 0){
        ways[j] = coinCount
        coinCount++
      } else if (coin < j){
        ways[j] = ways[j - coin] + 1
      }

    }

  }
  if (divisable){
  console.log(ways[n])
  return ways[n]
  } else {
    console.log(-1)
    return -1
  }
}

function minNumberOfCoinsForChange(n, denoms) {
  let ways = []
  while (ways.length <= n){
    ways.push(Infinity)
  }
  ways[0] = 0



  for (let i = 0; i < denoms.length; i++){
    let coin = denoms[i]

    for (let j = 0; j <= n; j++){

      if (coin <= j){
        ways[j] = Math.min(ways[j - coin] + 1, ways[j]  )
      }
    console.log(ways)

  }
ww

  }
  return ways[n]
}

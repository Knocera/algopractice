

unction valBst(tree){

  let queue = []
  queue.push(tree)

  while (queue.length > 0){

    let node = queue[0]
    let left = node.left
    let right = node.right
    console.log('value', node.value)


    if (left !== null){
      console.log('lefty', left.value)
      queue.push(left)
      }
    if (right !== null){
      queue.push(right)

      }

    if ((right !== null && right.value < node.value) || (left !== null && left.value >= node.value )){
    console.log('***FALSE****')
    console.log('value', node.value)
    console.log('left', left, 'right', right)
    return false
    }
    console.log('********')
    queue.shift()
  }
  return true
}

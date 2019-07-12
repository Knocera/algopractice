class Tree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value){
    if (value < this.value){
      if (this.left === null){
         this.left = new Tree(value)
      } else{
      this.left.insert(value)
    }
  }else{
    if (this.right === null){
         this.right = new Tree(value)
      } else{
      this.right.insert(value)
    }
  }
  return this
}
}


function findClosestValue(tree, target, closest = Infinity){
  console.log('tree:', tree.value)
  console.log('closest:', closest)
  if (tree.value === target){
    return tree.value
  }

  let difference = Math.abs(tree.value - target)
  let closestDiff = Math.abs(closest - target) 
  console.log('a', difference)
  console.log('b', closestDiff)
  

  if (difference < closestDiff){
    closest = tree.value
  }
  if (target < tree.value && tree.left !== null){
   return findClosestValue(tree.left, target, closest)
  }
  if (target > tree.value && tree.right !== null){
    return findClosestValue(tree.right, target, closest)
  } 
  return closest  
}



const test = new Tree(100).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22).insert(1).insert(1).insert(3).insert(1).insert(502).insert(55000).insert(204).insert(205).insert(207).insert(206).insert(208).insert(203).insert(-51).insert(-403).insert(1001).insert(57).insert(60).insert(4500)


findClosestValue(test, -70)
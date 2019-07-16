
//Min heap can insert and remove minimum

class minHeap {
  constructor(value){
    this.value = value; 
    this.left = null
    this.right = null
  }
  
  print(value){
    let queue = [];
    queue.push(this)
    while (queue.length > 0){
      let current = queue[0]
      
      if (current.left){
        queue.push(current.left)
      }
      if (current.right){
        queue.push(current.right)
      }
      if (queue.length === 3){
        if (!this.left){
          this.left= new minHeap(value)
        } 
        else if (!this.right){
          this.right = new minHeap(value)
        }
      }
      if (queue.length === 4){
        if (!this.left){
          this.left= new minHeap(value)
        } 
        else if (!this.right){
          this.right = new minHeap(value)
        }
      }
      console.log(current)
      
      queue.shift()
    }
  }
  //Recursive attempt
  // insert(value){
    
  //   //see if this is the most recent node
  //   if (this.left === null) {
  //     this.left = new minHeap(value)
  //   } 
  //   else if (this.right === null){
  //     this.right = new minHeap(value)  
  //   }
  //   else if (this.left && !this.right){
  //     this.right.insert(value)
  //   }
  //   else if (this.left && this.right){
  //     this.left.insert(value)
  //   }
   
  //   return this
  // }
}
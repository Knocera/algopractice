

let example = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]

let example2 = [10, 5, 9, 12]

function findthreeLargestNumbers(array){
  let result = [undefined, undefined, undefined]
    for (let i = 0; i<array.length; i++){
      let compare = array[i]
        if (compare > result[2] || result[2] === undefined ){
          result[2] = compare
        }
        else if (compare > result[1] || result[1] === undefined ){
          result[1]  = compare
        }
        else if (compare > result[0] || result[0] === undefined ){
          result[0] = compare
        }
      }
      return result

  }

  function insertionSort(array){
    let result = [array[0]]
    let start = result[0]

    for (let i = 1; i < array.length; i++){
      let current = array[i]
      if (current < start){
        result.unshift(current)
      } else {
        for (let j = i + 1; j < array.length; j++){
          if (current < result[j]){
            result.insert(j-1, current)
            break
          } else {
            result.push(current)
          }
          console.log('*****result: ', result);
        }
      }
    }

    return result
  }

// Given an array of objects each with a start and end time, combined objects that overlap

function mergeMeeting(meetings){
  let sortedMeetings = meetings.sort((a,b) => {
    return a.startTime - b.startTime;
  })
  const mergedMeetings = [sortedMeetings[0]]
  for (let i = 1; i < sortedMeetings.length; i++){
    const current = sortedMeetings[i];
    const lastMerged = mergedMeetings[mergedMeetings.length - 1]

    if (current.startTime <= lastMerged.endTime){
      lastMerged.endTime = Math.max(lastMerged.endTime, current.endTime);
      //I think this is mutating the actual reference of index in the merge array so it will actually change in the merged meetings array.
    } else {
      mergedMeetings.push(current)
    }
  }
  return mergedMeetings
}

//Checks to see if a deck has been shuffled more then one time.

function riffler(half1, half2, shuffled) {
  let firstIndex = 0;
  let secondIndex = 0;

  for (let i = 0; i < shuffled.length; i++) {
    let half1Pointer = half1[firstIndex];
    let half2Pointer = half2[secondIndex];
    let current = shuffled[i];
    if (current !== half1Pointer && current !== half2Pointer) {
      return false;
    }
    else if (current === half1Pointer) {
      firstIndex++;
    }
    else if (current === half2Pointer) {
      secondIndex++
    }
  }
  return true;
}
let h1 = [1, 3, 5, 7, 9]
let h2 = [2, 4, 6, 8, 10]
let trueDeck = [1, 3, 2, 4, 5, 7, 6, 8, 10, 9]
let falseDeck = [1, 3, 2, 5, 4, 6, 8, 10, 9, 7]
console.log(riffler(h1, h2, trueDeck))
// console.log(riffler(h1, h2, []))

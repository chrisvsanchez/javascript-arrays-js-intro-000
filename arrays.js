var chocolateBars =[];

function addElementToBeginningOfArray(array, element){
let arr = [element,...array];
return arr;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  let newArr = [...array,element];
  return newArr;
}

function destructivelyAddElementToEndOfArray(array, element){
 array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift();
return array;
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
 array.pop();
 return array;
}


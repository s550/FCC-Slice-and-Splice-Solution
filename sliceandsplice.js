function frankenSplice(arr1, arr2, n) {
  // n is how many splice places 
  
  let first = [...arr1];
  
  let second = [...arr2]
  
  let chop = second.splice(0,n);
  
  let mid = first.concat(second);
  
  let final = chop.concat(mid);
  
  return final;
}


frankenSplice([1, 2, 3], [4, 5, 6], 1);

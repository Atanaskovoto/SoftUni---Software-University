function sorting(array) {
  let rezultArray = []
  array.sort((a,b) => a - b);
    while (array.length > 0) {
   rezultArray.push(array.pop());
   rezultArray.push(array.shift());
   }
   console.log(rezultArray.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
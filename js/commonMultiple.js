console.log("number of common multiples are " + commonMultiple(100));
function commonMultiple(limit){
  let count = 0;
  for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 && i % 5 === 0)
    count++;

  return count;
}
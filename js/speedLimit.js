checkSpeed(145);
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  
  if (speed <= 70) {
    console.log('Ok') ;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12)
  console.log('License suspended');
  else
  console.log('Points:', points);
}
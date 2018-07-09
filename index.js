// Write your code in this file!
function scuberGreetingForFeet(rideLength) {

  if(rideLength <= 400){
    return "This one is on me!"
  } else if (rideLength > 2000 ) {
    return "I will gladly take your thirty bucks."
  } else if (rideLength > 2500 ){
    return "No can do."
  }
}

console.log(scuberGreetingForFeet(40))

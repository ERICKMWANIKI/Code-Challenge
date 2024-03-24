// Define the speed and speed limit
let speed=200;
const speedlimit =70;
// Calculate demerit points based on the speed
let demeritpoints = Math.floor((speed - speedlimit)/5);
// Check if the speed is within the speed limit
if(speed <= speedlimit){
    console.log("ok");
}else{
      // If speed exceeds the limit, calculate demerit points again
    demeritpoints = math.floor((speed - speedelimit)/5);
    console.log("Points:",demeritpoints);
    if(demeritpoints > 12){
        consal.log("licence suspended")
    }
}
//calculate Output
console.log(demeritpoints)
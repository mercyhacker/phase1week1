const speedLimit=70  // speed Limit is 70km/s
function speedRules(speedLimit,input){
    if(input<=speedLimit){
        return "Ok"         // if speed is 70 km/s or less,it returns 'Ok'
    }
    const demeritPoints=((input-speedLimit)/5) // calculates every 5 km/s above the speed limit (70)
    if(demeritPoints>12){
        return "Licence suspended"} // returns license suspended if the demerits are above 12
    else{
        return "Demerit Points:"+ [demeritPoints]; //returns the number of demerits a driver has if he exceeded the speed linit
    }
}console.log(speedRules(70,200)) // enter the value of speedLimit and input


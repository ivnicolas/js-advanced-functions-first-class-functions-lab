// Code your solution in this file!
function returnFirstTwoDrivers(driver){
    return driver.slice(0,2)
}

function returnLastTwoDrivers(driver){
    return driver.slice(-2)
}

 const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

 function createFareMultiplier(int) {
     return function(fare){
         return fare * int
     }
 }

 function fareDoubler(fare){
     return createFareMultiplier(2)(fare)
 }

 function fareTripler(fare){
    return createFareMultiplier(3)(fare)
}

function  selectDifferentDrivers(arrayOfDrivers, choiceFunction){
    return choiceFunction(arrayOfDrivers)
}
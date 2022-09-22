const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(first){
    return drivers.slice(0,2);
}
function returnLastTwoDrivers(last){
    return drivers.slice(2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiply){
    return function fareMultiplier(fare){
        return multiply * fare 
}
}
function fareDoubler(doubles){
  return doubles * 2  
} 
function fareTripler(triples){
    return triples * 3
}
function selectDifferentDrivers(arrayOfDrivers, pass){
return pass(arrayOfDrivers)
}
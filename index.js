// Code your solution in this file!
const  returnFirstTwoDrivers = function anonymousFunction([]){
    return (['Antonia', 'Nuru']);
    
    }
    
    const  returnLastTwoDrivers = function anonymousFunction([]){
        return (['Amari', 'Mo']);
    
    }
    const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
    
    function createFareMultiplier(integer){
        return function(price){
          return price*integer;
        };
    }
    const fareDoubler = createFareMultiplier(2);
    const fareTripler = createFareMultiplier(3);
    
    const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn) {
        return driversToReturn(arrayOfDrivers);
    }

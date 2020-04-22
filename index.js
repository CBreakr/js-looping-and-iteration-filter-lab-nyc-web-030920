// Code your solution in this file

function findMatching(drivers, name){
    return drivers.filter(driver => {
        return name.toLowerCase() === driver.toLowerCase();
    });
}

function fuzzyMatch(drivers, first){
    return drivers.filter(driver => {
        return driver.toLowerCase().startsWith(first.toLowerCase());
    });
}

function matchName(drivers, name){
    return drivers.filter(driver => {
        return driver.name === name;
    });
}
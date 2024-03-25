function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch(drivers, string){
    return drivers.filter(driver => driver.toUpperCase().startsWith(string.toUpperCase()));
}
function matchName(drivers, string) {
    return drivers.filter(driver => driver.name.toUpperCase() === string.toUpperCase())
}
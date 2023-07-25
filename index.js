// Code your solution here

function findMatching(drivers, query) {
    const lowercaseQuery = query.toLowerCase();
    
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === lowercaseQuery);
  
    return matchingDrivers;
  }

  function fuzzyMatch(drivers, letters) {
    const lowercaseLetters = letters.toLowerCase();
    
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase().startsWith(lowercaseLetters));
  
    return matchingDrivers;
  }

  function matchName(driverObjects, name) {
    const matchingDrivers = driverObjects.filter(driver => driver.name === name);
  
    return matchingDrivers;
  }
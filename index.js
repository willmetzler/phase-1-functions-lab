function distanceFromHqInBlocks(location) {
if (location >= 42) {
    return location - 42;
} else if (location < 42) {
    return 42 - location;
}
};

function distanceFromHqInFeet(location) {
    return 264 * distanceFromHqInBlocks(location);
};

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {let blocksTravelled = (start - destination);
    let feetTravelled = blocksTravelled * 264;
    return feetTravelled;}
    else if (destination > start) {let blocksTravelled = (destination - start);
        let feetTravelled = blocksTravelled * 264;
        return feetTravelled;}
};

function calculatesFarePrice(start, destination) {
    let blocksTravelled;
    let feetTravelled;

    if (start > destination) {
        blocksTravelled = start - destination;
        feetTravelled = blocksTravelled * 264;
      } else if (destination > start) {
        blocksTravelled = destination - start;
        feetTravelled = blocksTravelled * 264;
      }

    if (feetTravelled <= 400) {
        return 0}
    else if (feetTravelled > 400 && feetTravelled <= 2000){
        return 0.02 * (feetTravelled - 400)
    }
    else if (feetTravelled >= 2000 && feetTravelled <= 2500) {
        return 25;} 
    else if (feetTravelled > 2500) {
        return "cannot travel that far";
    };
};
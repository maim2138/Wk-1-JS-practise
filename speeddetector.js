function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPoint = 5;

    if (speed < speedLimit) {
        return 'Ok';
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / demeritPoint);
        return demeritPoints
    }
}
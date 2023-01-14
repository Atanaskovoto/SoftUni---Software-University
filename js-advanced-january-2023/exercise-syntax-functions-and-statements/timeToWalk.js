function timeToWalk(steps, footprint, speed) {
    const distanceInMeters = steps * footprint;
    const breaks = Math.floor(distanceInMeters / 500) * 60;
    const speedMetersInSecond = speed / 3.6;
    const time = distanceInMeters / speedMetersInSecond;
    const totalTime = time + breaks;

    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor(totalTime / 60);
    const seconds = Math.round(totalTime % 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
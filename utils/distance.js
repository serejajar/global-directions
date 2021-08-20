function getDistance(start, dest) {
    const R = 6371e3; // metres
    const metersInMile = 1609.34;

    const [lon1, lat1] = start;
    const [lon2, lat2] = dest;

    const φ1 = lat1 * Math.PI/180; // φ, λ in radians
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const distance = R * c; // in metres

    const miles = Math.round(distance / metersInMile);

    if (miles < 1) {
        return '';
    }

    return `${miles}mi`;
}

module.exports = getDistance;

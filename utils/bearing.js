// Converts from degrees to radians.
function toRadians(degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
function toDegrees(radians) {
    return radians * 180 / Math.PI;
}

function getBearing(start, dest) {
    const startLng = toRadians(start[0]);
    const startLat = toRadians(start[1]);

    const destLng = toRadians(dest[0]);
    const destLat = toRadians(dest[1]);

    const y = Math.sin(destLng - startLng) * Math.cos(destLat);
    const x = Math.cos(startLat) * Math.sin(destLat) -
        Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);

    let brng = Math.atan2(y, x);
    brng = toDegrees(brng);

    return (brng + 360) % 360;
}

module.exports = getBearing;

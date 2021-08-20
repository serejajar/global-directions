// https://stackoverflow.com/questions/46590154/calculate-bearing-between-2-points-with-javascript
// http://www.movable-type.co.uk/scripts/latlong.html
const getGlobalDirection = require('./utils/direction');
const getDistance = require('./utils/distance');

const [,, stringA, stringB] = process.argv;

const a = JSON.parse(stringA);
const b = JSON.parse(stringB);

console.log(a, b);

const direction = getGlobalDirection(a, b);
const miles = getDistance(a, b);

console.log(`${miles}, ${direction}`);

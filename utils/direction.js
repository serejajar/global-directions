const getBearing = require('./bearing');

const globalDirections = [
    {
        name: 'N',
        fullName: 'North'
    },
    {
        name: 'NNE',
        fullName: 'North-North-East'
    },
    {
        name: 'NE',
        fullName: 'North-East'
    },
    {
        name: 'ENE',
        fullName: 'East-North-East'
    },
    {
        name: 'E',
        fullName: 'East'
    },
    {
        name: 'ESE',
        fullName: 'East-South-East'
    },
    {
        name: 'SE',
        fullName: 'South-East'
    },
    {
        name: 'SSE',
        fullName: 'South-South-East'
    },
    {
        name: 'S',
        fullName: 'South'
    },
    {
        name: 'SSW',
        fullName: 'South-South-West'
    },
    {
        name: 'SW',
        fullName: 'South-West'
    },
    {
        name: 'WSW',
        fullName: 'WestSouth-West'
    },
    {
        name: 'W',
        fullName: 'West'
    },
    {
        name: 'WNW',
        fullName: 'West-North-West'
    },
    {
        name: 'NW',
        fullName: 'North-West'
    },
    {
        name: 'NNW',
        fullName: 'North-North-West'
    }
];

function getGlobalDirection(start, dest) {
    const bearing = getBearing(start, dest);
    console.log('bearing', bearing);
    const placeholder = {
        name: '',
        fullName: ''
    };

    const degree = 360 / globalDirections.length; // e.g., 360 / (16 * 2) = 22.5

    const direction = globalDirections.find((gD, i) => {
        const start = i === 0 ? 360 : (i * degree);
        const end = i * degree;
        const halfDegree = (degree / 2);

        // Direction is on center of range, e.g., North from 348.75 to 11.25
        const from = start - halfDegree;
        const to = end + halfDegree;

        console.log('bearing: ', bearing, ', from: ', from, ', to: ', to);
        // for North
        if (i === 0) {
          return (bearing >= from && bearing <= 360) || (bearing > 0 && bearing <= to);
        }

        return bearing >= from && bearing <= to;
    }) || placeholder;

    console.log('getGlobalDirection', direction);
    return direction.name;
}

module.exports = getGlobalDirection;

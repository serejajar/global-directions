const getGlobalDirection = require('./utils/direction');
const getDistance = require('./utils/distance');

const data = [
  {
    name: 'From ~Big Spring to ~Hasen',
    a: [-101.38009, 32.375730],
    b: [-101.73219, 47.29922],
    expected: {
      direction: 'N',
      distance: '1031mi'
    }
  },
  {
    name: 'From Gillete to road',
    a: [-105.44509282142073, 44.16692586036073],
    b: [-105.5705773, 44.2721123],
    expected: {
      direction: 'NW',
      distance: '10mi'
    }
  },
  {
    name: 'From Memphis to road',
    a: [-90.0315, 35.15012],
    b: [-89.70525, 35.12077],
    expected: {
      direction: 'E',
      distance: '19mi'
    }
  }
];


describe("Check direction and distance", () => {
  // road near Big Spring
  data.forEach((item) => {
    const { a, b, name, expected} = item;

    test(name, () => {
      expect(getGlobalDirection(a, b)).toBe(expected.direction);
      expect(getDistance(a, b)).toBe(expected.distance);
    });
  });
});

const map = require('../questions/map');
const { it, assert, describe } = require('../tester');

const add1 = (x) => {
    return x + 1;
};

const parseNum = (x) => {
    return x + '1';
};

describe('map', () => {
    it('should return an empty array if given an empty array', () => {
        const result = map([], add1);

        assert.arrayEqual(result, []);
    });

    it('should return an array containing output of function across each element', () => {
        const result = map([1, 2, 3, 4], add1);

        assert.arrayEqual(result, [2, 3, 4, 5]);
    });

    it('should work with any type of array', () => {
        const result = map(['1', '2', '3', '4'], parseNum);

        assert.arrayEqual(result, [1, 2, 3, 4]);
    });
});


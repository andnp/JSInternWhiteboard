const flatten = require('../questions/flatten');
const { it, assert, describe } = require('../tester');

describe('flatten', () => {
    it('should return an empty array when given an empty array', () => {
        const result = flatten([]);

        assert.arrayEqual(result, []);
    });

    it('should return a 1-array when given a 1-array', () => {
        const result = flatten([1, 2, 3, 4]);

        assert.arrayEqual(result, [1, 2, 3, 4]);
    });

    it('should return a 1-array when given a 2-array', () => {
        const result = flatten([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]);

        assert.arrayEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should return a 1-array when given a mix of 1 and 2-arrays', () => {
        const result = flatten([
            1, [2], 3, 4, [5, 6, 7], 8, [9]
        ]);

        assert.arrayEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should recursively flatten an n-array to a 1-array', () => {
        const result = flatten([
            1, [2], [[3]], [[[4]]], [[[[5]]]], [6, 7], [[8, [9]]]
        ]);

        assert.arrayEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});


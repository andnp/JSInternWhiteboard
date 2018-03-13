const find = require('../questions/find');
const { it, assert, describe } = require('../tester');

const isBiggerThanTwo = (x) => {
    return x > 2;
};

describe('find', () => {
    it('should return first element that satisfies predicate', () => {
        const result = find([2, 1, 4, 3], isBiggerThanTwo);

        assert.equal(result, 4);
    });

    it('should return `undefined` if no match', () => {
        const result = find([0, 0, 2, 1], isBiggerThanTwo);

        assert.equal(result, undefined);
    });
});


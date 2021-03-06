const memoize = require('../questions/02-memoize');
const { it, assert, describe } = require('../tester');

describe('memoize', () => {
    it('should call a 0 arg function once', () => {
        let haveCalled = false;

        const func = () => {
            if (haveCalled) throw new Error('oops');
            haveCalled = true;
        };

        const resultFunc = memoize(func);

        resultFunc();
        resultFunc();
    });

    it('should remember the result from a 0 arg function', () => {
        let value = 0;

        const func = () => {
            value = value + 1;
            return value;
        };

        const memoizeFunc = memoize(func);

        const first = memoizeFunc();
        const second = memoizeFunc();

        assert.equal(first, 1);
        assert.equal(second, 1);
    });

    it('should return a function that computes the result of another function', () => {

        let i = 0;
        const increment = (x) => {
            i += x;
            return i;
        };

        const resultFunc = memoize(increment);

        const one = resultFunc(1);
        const three = resultFunc(2);
        const six = resultFunc(3);

        assert.equal(one, 1);
        assert.equal(three, 3);
        assert.equal(six, 6);
    });

    it('should return a function that computes the result of another function once per input value', () => {

        let i = 0;
        const increment = (x) => {
            i += x;
            return i;
        };

        const resultFunc = memoize(increment);

        const two = resultFunc(2);
        const five = resultFunc(3);
        const stillFive = resultFunc(3);
        const stillTwo = resultFunc(2);

        assert.equal(two, 2);
        assert.equal(five, 5);
        assert.equal(stillFive, 5);
        assert.equal(stillTwo, 2);
    });
});


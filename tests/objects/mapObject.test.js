import test from 'ava';
import { mapObject } from '../../src/index';

test('Should map an object', t => {
    const obj = { test: 1, boo: 2 };
    const mapped = mapObject(obj, (value, key) => {
        return value * 2;
    });
    t.true(mapped.test === 2);
});

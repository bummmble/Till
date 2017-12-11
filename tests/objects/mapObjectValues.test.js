import test from 'ava';
import { mapObjectValues } from '../../src/index';

test('Should map object values', t => {
    const obj = { test: 1, boo: 2 };
    const mapped = mapObjectValues(obj, value => value = value * 2);
    t.true(mapped.length === 2);
    t.true(mapped[0] === 2);
});

import test from 'ava';
import { groupArray } from '../../src/index';

test('Should handle empty arrays', t => {
    const result = groupArray([], item => 'test');
    t.is(Object.keys(result).length, 0);
});

test('Should handle groups', t => {
    const items = ['test', 'one'];
    const groupFn = item => 'cat';
    const result = groupArray(items, groupFn);
    t.is(Object.keys(result).length, 1);
});

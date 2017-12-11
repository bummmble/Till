import test from 'ava';
import { flatmapArray } from '../../src/index';

test('Should flat map an array', t => {
    const arr = [[1, 2], 3];
    const mapped = flatmapArray(arr, x => x);
    t.true(mapped.length === 3);
});

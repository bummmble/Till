import test from 'ava';
import { partitionArray } from '../../src/index';

test('Should partition an array', t => {
    const arr = [1, 2, 3, 4, 5, 6];
    const partition = partitionArray(arr, x => x > 5);
    t.true(partition[0].length === 1);
    t.true(partition[1].length === 5);
});

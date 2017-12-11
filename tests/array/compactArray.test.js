import test from 'ava';
import { compactArray } from '../../src/index';

test('Should remove null and undefined', t => {
    const arr = [1, 2, null, undefined];
    const compact = compactArray(arr);
    t.true(compact.length === 2);
});

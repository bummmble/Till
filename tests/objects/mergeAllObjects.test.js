import test from 'ava';
import { mergeAllObjects } from '../../src/index';

test('Should merge a list of objects', t => {
    const list = [{ test: 1 }, { boo: 2 }, { foo: 3 }];
    const merged = mergeAllObjects(list);
    console.log(merged);
    t.true(merged.hasOwnProperty('test'));
})

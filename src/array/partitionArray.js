export function partitionArray(arr, predicate, ctx) {
    const first = [];
    const second = [];
    arr.forEach((el, idx) => {
        if (predicate.call(ctx, el, idx, arr)) {
            first.push(el);
        } else {
            second.push(el);
        }
    });
    return [first, second];
}

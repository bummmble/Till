export function flatmapArray(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const res = fn.call(arr, arr[i], i);
        if (Array.isArray(res)) {
            result.push(...res);
        } else {
            result.push(res);
        }
    }
    return result;
}

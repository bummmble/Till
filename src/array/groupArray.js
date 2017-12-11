export function groupArray(arr, fn) {
    return arr.reduce((acc, curr) => {
        const res = fn.call(arr, arr[curr], curr);
        if (!acc[res]) {
            acc[res] = [];
        }
        acc[res].push(arr[curr]);
        return acc;
    }, {});
}

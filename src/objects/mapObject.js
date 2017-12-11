export function mapObject(obj, fn) {
    return Object.keys(obj).reduce((acc, curr) => {
        acc[curr] = fn(obj[curr], curr, obj);
        return acc;
    }, {});
}

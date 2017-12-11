export function mapObject(obj, fn) {
    const props = Object.keys(obj);
    const result = props.reduce((acc, curr) => {
        acc[curr] = fn(obj[curr], curr, obj);
        return acc;
    }, {});
    return result;
}

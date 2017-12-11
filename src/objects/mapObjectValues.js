export function mapObjectValues(obj, fn) {
    return Object.keys(obj).map(prop => fn(obj[prop], prop, obj));
}

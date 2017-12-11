
export function mergeAllObjects(list) {
    return Object.assign.apply(null, [{}].concat(list));
}

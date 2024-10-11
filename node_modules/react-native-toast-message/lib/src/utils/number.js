export function upperBound(n, max) {
    return n > max ? max : n;
}
export function lowerBound(n, min) {
    return n < min ? min : n;
}
export function bound(n, min, max) {
    return upperBound(lowerBound(n, min), max);
}

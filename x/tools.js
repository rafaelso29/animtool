function genRandomNum() {
    return Math.random().toString().split(".").slice(1);
}
export function crAnimID() {
    return `${genRandomNum()}${genRandomNum()}`;
}
//# sourceMappingURL=tools.js.map
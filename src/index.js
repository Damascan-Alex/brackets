module.exports = function check(str, bracketsConfig) {
    let map = new Map();
    let stack = [];

    for (brackets of bracketsConfig) {
        map.set(brackets[0], brackets[1]);
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(map.get(str[i]));
        }
    }

    return stack.length === 0 ? true : false;
};

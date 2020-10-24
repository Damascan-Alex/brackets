module.exports = function check(str, bracketsConfig) {
    let open = objectify(bracketsConfig);
    let closed = objectifyBoolean(bracketsConfig);

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return false;
        }
    }

    return stack.length === 0;
};

// Transform from array to objects
function objectify(array) {
    return array.reduce(function (p, c) {
        p[c[0]] = c[1];
        return p;
    }, {});
}

function objectifyBoolean(array) {
    return array.reduce(function (p, c) {
        p[c[1]] = true;
        return p;
    }, {});
}

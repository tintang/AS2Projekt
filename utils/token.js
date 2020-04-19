const generateRandomNumber = require('./random');

/**
 * @param {Number} tokenLength
 */
const generateToken = (tokenLength) => {
    let token = "";
    for (let i = 0; i < tokenLength; i++) {
        let asciiValue = generateRandomNumber(33, 126);
        token += String.fromCharCode(asciiValue);
    }
    return token;
};

module.exports = generateToken;
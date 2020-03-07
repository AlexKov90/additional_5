module.exports = function check(str, bracketsConfig) {
    const brackets = [];
    let openBrackets = '';
    let closeBrackets = '';

    bracketsConfig.forEach(bracketConfig => {
        openBrackets += bracketConfig[0];
        closeBrackets += bracketConfig[1];
    });

    for (let i = 0; i < str.length; i++) {
        const bracket = str[i];
        const indexOfInOpenBrackets = openBrackets.indexOf(bracket);
        const indexOfInCloseBrackets = closeBrackets.indexOf(bracket);

        if (indexOfInOpenBrackets !== -1) {
            if (indexOfInCloseBrackets !== -1) {
                if (brackets.indexOf(bracket) === -1) {
                    brackets.push(bracket);
                } else if (brackets.pop() !== bracket) {
                    return false;
                }
            } else {
                brackets.push(bracket);
            }
        } else if (brackets.pop() !== openBrackets.charAt(indexOfInCloseBrackets)) {
            return false;
        }
    }

    return brackets.length === 0;
}
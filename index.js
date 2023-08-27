const { processToken } = require('./utils/process.js');

function tokenizer(input) {
  const tokens = [];
  let currentToken = "";

  for (const char of input) {
    if (/[a-zA-Z]/.test(char)) {
      currentToken += char;
    } else {
      if (currentToken) {
        tokens.push(processToken(currentToken));
        currentToken = "";
      }
      tokens.push(processToken(char));
    }
  }

  if (currentToken) {
    tokens.push(processToken(currentToken));
  }

  return '[' + tokens.map(token => `"${token}"`).join(', ') + ']';
}

module.exports = tokenizer;

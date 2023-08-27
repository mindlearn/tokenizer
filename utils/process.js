function processToken(token) {
  if (token.trim() === "") {
    return " "; //
  } else if (token === ",") {
    return " , ";
  } else {
    return token;
  }
}

module.exports = { processToken };

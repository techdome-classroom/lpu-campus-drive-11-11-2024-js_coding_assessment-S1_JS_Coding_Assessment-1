const decodeTheRing = function (s, p) {
  let regexPattern = '^' + p
      .replace(/\?/g, '.') 
      .replace(/\*/g, '.*') 
      + '$';

  const regex = new RegExp(regexPattern);

  return regex.test(s);
};

module.exports = decodeTheRing;

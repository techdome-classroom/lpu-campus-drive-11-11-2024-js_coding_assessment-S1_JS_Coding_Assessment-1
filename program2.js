const decodeTheRing = function (s, p) {
  const regexPattern = '^' + p.split('*').join('.*').split('?').join('.') + '$';
  
  // Create a regular expression object
  const regex = new RegExp(regexPattern);
  
  // Test if the message matches the pattern and return the result
  return regex.test(s);  // Returns true or false
};

module.exports = decodeTheRing;

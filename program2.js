const decodeTheRing = function (s, p) {
  const regexPattern = '^' + p.split('*').join('.*').split('?').join('.') + '$';
  
  const regex = new RegExp(regexPattern);
  
  return regex.test(s);  
};

module.exports = decodeTheRing;

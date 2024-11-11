const decodeTheRing = function (s, p) {

    // write your code here

    const decodeTheRing = function (s, p) {
      // Convert the pattern to a valid regular expression
      // Replace '*' with '.*' and '?' with '.'
      const regexPattern = '^' + p.split('*').join('.*').split('?').join('.') + '$';
      
      // Create a regular expression object
      const regex = new RegExp(regexPattern);
      
      // Test if the message matches the pattern
      return regex.test(s);
    };
    
    module.exports = decodeTheRing;
    

  };
  
  module.exports = decodeTheRing;
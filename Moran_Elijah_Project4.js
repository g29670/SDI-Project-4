//alert("JavaScript works!");
//Elijah Moran
//30 May 2013
//Project 4
//Function Library

// String Library
var StringLibrary = function () {
    // Does a string follow a 123-456-7890 pattern like a phone number?
    // Returns boolean
    var isPhoneNum = function (str) {
    var re = /\d{3}-\d{3}-\d{4}/;
    return re.test(str);
    };
    // Does a string follow an aaa@bbb.ccc pattern like an email address?
    // Returns boolean
    var isEmailAddr = function (str) {
    var re = /^\w+@[\w.\-]+\.[A-Za-z]{2,3}$/;
    return re.test(str);
    };
    // Is the string a URL (Does it start with http:// or https://)?
    // Returns boolean
    var isUrl = function (str) {
    var re = /^(?:http|https):/;
    return re.test(str);
    };
    // Title-case a string (split into words, then uppercase the first letter of each word).
    // Returns modified string with the first letter capitalized in each word
    var splitStrUpper = function (str) {
    var split = str.split(" ");
    var result = "";
    for (var i = 0, j = split.length; i < j; i++) {
    var spNew = split[i].replace(split[i].charAt(0),(split[i].charAt(0)).toUpperCase());
    result = result.concat(spNew + " ");
    };
    return result;
    };
   // Given a string that is a list of things separated by a given string, as well as another
   string separator, return a string with the first separator changed to the second: “a,b,c” +
   “,” + “/” --> “a/b/c”.
   var swapSeparator = function (str,newSep) {
   var re = /\W/g;
   return str.replace(re,newSep);
   };

   return {
   "isPhoneNum" : isPhoneNum,
   "isEmailAddr" : isEmailAddr,
   "isUrl" : isUrl,
   "splitStrUpper" : splitStrUpper,
   "swapSeparator" : swapSeparator

   };
   };

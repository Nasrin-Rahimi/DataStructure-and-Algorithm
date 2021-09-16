/*
Design an algorithm to encode a list of strings to a string. The encoded string is 
then sent over the network and is decoded back to the original list of strings.
*/

let encode = function(strs) {
  let strArr = [];
  for(let str of strs){
      strArr.push(str.length);
      strArr.push('/');
      strArr.push(str);
  }
  return strArr.join('');
}


let decode = function(s) {
    let strs = [];
    let i = 0;

    while(i < s.length) {
        let slash = s.indexOf('/', i);
        let len = parseInt(s.substring(i, slash));
        let str = s.substring(slash + 1, slash + 1 + len);
        strs.push(str);
        i = slash + 1 + len;
    }
    return strs;
}

/*

list of strings when encoding, can be compiled: StringLength + "/" + string

When this decoding is decoded, the length of each String can be determined by finding 
the first "/", and the starting position of each String can be determined by this "/" position,
 even the String itself has "/".

Time O (N)
Space O (N)

The indexOf() method returns the position of the first occurrence of a specified value in a string.
indexOf() returns -1 if the value is not found.
string.indexOf(searchvalue, start)

*/
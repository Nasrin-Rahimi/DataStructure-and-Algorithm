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

//The indexOf() method returns the position of the first occurrence of a specified value in a string.
//indexOf() returns -1 if the value is not found.
//string.indexOf(searchvalue, start)
/*
You are given a 0-indexed string s that you must perform k replacement operations on.
The replacement operations are given as three 0-indexed parallel arrays, indices,
 sources, and targets, all of length k.
*/

var findReplaceString = function(s, indices, sources, targets) {
    
    let k = indices.length;
    let tmp = [];
    
    for(i = 0; i < k; i++) {
        let start = indices[i];
        let len = sources[i].length;
        let subS = s.substring(start, start + len)
        if (subS == sources[i]) {
            //check ovelaping
            if (indices[i + 1] <= sources[i].length) {
                tmp.push(targets[i])
            }
        }
        else {
            tmp.push(' ');
        }
    }
    for(let i = 0; i < k; i++) {
        if(tmp[i] !== " "){
           s = s.replace(sources[i], targets[i]);
        }
    }
   
    return s
};

console.log(findReplaceString("abcd",[0, 2], ["a", "d"], ["eee", "ffff"]));

//It doesn't work on unsorted indices
/*
Input: s = "abcd", indices = [0, 2], sources = ["a", "cd"], targets = ["eee", "ffff"]
Output: "eeebffff"
Explanation:
"a" occurs at index 0 in s, so we replace it with "eee".
"cd" occurs at index 2 in s, so we replace it with "ffff".
*/
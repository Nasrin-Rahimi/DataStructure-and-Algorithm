//Write a Parentheses Checker function to determine if the 
//input string’s opening and closing brackets are properly nested.
//"{[]()}"  => true
//"{(()}"   => false

function balancedParentheses(str) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for(let i = 0; i < str.length; i++) {
        // If character is an opening brace add it to a stack
        if(str[i] === '(' || str[i] === '[' || str[i] === '{') {
            stack.push(str[i]);
        }
        //if closing brace, pop from stack
        else if(str[i] === ')' || str[i] === ']' || str[i] === '}'){
            let openBrace = stack.pop();
            if(str[i] !== map[openBrace]) {
                return false;
            }

        }
    }

    if(stack.length !== 0) {
        return false;
    }
    return true;
}

console.log("Does {[]()} have balanced parantheses?",balancedParentheses("{[]()}" ));
console.log("Does {[(])} have balanced parantheses?", balancedParentheses("{[(])}"));
console.log("Does {[} have balanced parantheses?", balancedParentheses("{[}"));
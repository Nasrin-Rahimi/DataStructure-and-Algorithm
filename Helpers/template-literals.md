Template literals (Template strings)

Template literals are literals delimited with backticks (`), allowing embedded expressions 
called substitutions.

Syntax
// Untagged, these create strings:
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

// Tagged, this calls the function "example" with the template as the
// first argument and substitution values as subsequent arguments:
example`string text ${expression} string text`

Description
Template literals are enclosed by the backtick (` `) (grave accent) character instead of 
double or single quotes.

Template literals can contain placeholders. These are indicated by the dollar sign and 
curly braces (${expression}). The expressions in the placeholders and the text between 
the backticks (` `) get passed to a function.

The default function just concatenates the parts into a single string. If there is an 
expression preceding the template literal (tag here), this is called a tagged template. 
In that case, the tag expression (usually a function) gets called with the template literal,
which you can then manipulate before outputting.

To escape a backtick in a template literal, put a backslash (\) before the backtick.

`\`` === '`' // --> true

Multi-line strings
Any newline characters inserted in the source are part of the template literal.

Using normal strings, you would have to use the following syntax in order to get multi-line 
strings:

console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"

Using template literals, you can do the same like this:

console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

Expression interpolation
In order to embed expressions within normal strings, you would use the following syntax:

let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."
Copy to Clipboard
Now, with template literals, you are able to make use of the syntactic sugar, making 
substitutions like this more readable:

let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

Raw strings
The special raw property, available on the first argument to the tag function, allows you to access the raw strings as they were entered, without processing escape sequences.

function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'

In addition, the String.raw() method exists to create raw strings—just like the default template function and string concatenation would create.

let str = String.raw`Hi\n${2+3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(',');
// "H,i,\\,n,5,!"

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals



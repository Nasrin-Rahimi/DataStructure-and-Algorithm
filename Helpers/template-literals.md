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

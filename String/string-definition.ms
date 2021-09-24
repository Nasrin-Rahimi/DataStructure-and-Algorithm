A string is actually an array of unicode characters. You can perform almost all the 
operations we used in an array.

String has its own compare function. However, there is a problem:

Can we use "==" to compare two strings?

It depends on the answer to the question:

Does the language support operator overloading?

If the answer is yes (like C++), we may use "==" to compare two strings.
If the answer is no (like Java), we may not use "==" to compare two strings. When we 
use "==", it actually compares whether these two objects are the same object.

Note: JavaScript does not support overloading.

Immutable means that you can't change the content of the string once it's initialized.

In some languages (like C++), the string is mutable. That is to say, you can modify the 
string just like what you did in an array. 
In some other languages (like Java), the string is immutable. This feature will bring 
several problems. 

Note: Strings and Numbers are Immutable in JS. If you want to modify just one of 
the characters, you have to create a new string.

You should be aware of the time complexity of built-in operations.(like substring or indexof)

For instance, if the length of the string is N, the time complexity of both finding 
operation and substring operation is O(N).

Also, in languages which the string is immutable, you should be careful with the 
concatenation operation.

In immutable language like JS, concatination works slow. Because concatenation works 
by first allocating enough space for the new string, copy the contents from the old 
string and append to the new string.

Therefore, the time complexity in total will be:

    String s = "";
    int n = 10000;
    for (int i = 0; i < n; i++) {
        s += "hello";
    }

   5 + 5 × 2 + 5 × 3 + … + 5 × n
= 5 × (1 + 2 + 3 + … + n)
= 5 × n × (n + 1) / 2,

which is O(n2).

If you did want your string to be mutable, you can convert it to a char array.

in js str.split('')

If you have to concatenate strings often, it will be better to use some other data 
structures like StringBuilder. The below code runs in O(n) complexity.

   int n = 10000;
    StringBuilder str = new StringBuilder();
    for (int i = 0; i < n; i++) {
        str.append("hello");
    }
    String s = str.toString();




/**
 * Every valid email consists of a local name and a domain name, separated by the '@' sign. 
 * Besides lowercase letters, the email may contain one or more '.' or '+'.

For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the 
domain name.
If you add periods '.' between some characters in the local name part of an email address, 
mail sent there will be forwarded to the same address without dots in the local name. Note 
that this rule does not apply to domain names.

For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email 
address.
If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

For example, "m.y+name@email.com" will be forwarded to "my@email.com".
It is possible to use both of these rules at the same time.

Given an array of strings emails where we send one email to each email[i], return the 
number of different addresses that actually receive mails.

Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com",
"testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.

Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
Output: 3
 */

/**
 * 
 We need to clean the emails given to us. The most intuitive solution will be to iterate 
 over the emails and clean them one by one.
Here, cleaning the email means removing unnecessary characters, per the rules given to us. 
Once an email has been cleaned, it can be pushed into a hash set. The size of this hash 
set will then equal the count of unique emails.


Rules to clean email:

If there are periods '.' in local name ignore them.
If there is a plus '+' in local name skip all local name characters till '@'.
There is only one '@' symbol and the substring after it is our domain name; we will keep 
the domain name as it is.

 */

/**
 Approch 2: Using String Split Method
A more elegant way of cleaning emails is to leverage built-in functions such as split and 
replace.

The string split() method breaks a given string around matches of the given regular 
expression.
The string replace() method returns a new string after replacing all occurrences of some 
substring or character (in this case '.') with a new substring or character (in this case '').
Algorithm

For each email present in the emails array:
Split the string into two parts separated by'@', local name, and domain name.
Split the local name into parts separated by '+'. Since we do not need the part after '+', 
let the first part be the local name.
Remove all '.' from the local name and append the domain name to it.
After cleaning the email, insert it into the hash set.
Return the size of the hash set.

 */


let numUniqueEmails = function(emails) {
    // hash set to store all the unique emails
    let uniqEmails = new Set();

    emails.forEach(email => {
        //split into two parts local and domain
        let parts = email.split('@');

         // split local by '+'
        let localName = parts[0].split('+');

        // remove all '.', and concatenate '@' and append domain
        uniqEmails.add(localName[0].replaceAll('.','') + '@' + parts[1]);
    });
    return uniqEmails.size;
}

//OR use split and reqular expression

let numUniqueEmails = function(emails) {
    let uniqEmails = new Set(), count = 0;

	for(let i = 0; i < emails.length; i++) {
        let email = emails[i].split('@');
        email[0] = email[0].replace(/\./g,"").replace(/\+.*/,'');
        email = email.join('@');
        if(!uniqEmails.has(email)) {
            count++;
            uniqEmails.add(email);
        }
    }
    return count;

};

/**
 * Let N be the number of the emails and M be the average length of an email.

Time Complexity: O(N⋅M)
The split method must iterate over all of the characters in each email and the replace 
method must iterate over all of the characters in each local name. As such, they both 
require linear time and are O(M) operations. Since there are N emails and the average 
email has M characters in it, the complexity is of order (Number of emails) 
* (Number of characters in an email) = N*M.

Space Complexity: O(N⋅M)
In the worst case, when all emails are unique, we will store every email address given 
to us in the hash set.

 */

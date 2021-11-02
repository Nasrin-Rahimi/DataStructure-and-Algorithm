Below codes are in Python 2.7.

A tuple is like a list:

(17, 3, "My name is Parker")

(Tuples are written with parentheses to differentiate them from lists.)

Like lists, tuples are ordered and you can access elements by their index:

cake_tuple = ('angel', 'bundt')

cake_tuple[0]
# returns: 'angel'

But tuples are immutable! They can't be edited after they're created.

cake_tuple = ('angel', 'bundt')
cake_tuple[1] = 'carrot'
# raises: TypeError: 'tuple' object does not support item assignment

Tuples can have any number of elements (the 'tu' in tuple doesn't mean 'two', it's just a generic name taken from words like 'septuple' and 'octuple').

(90, 4, 54)
(True, False, True, True, False)


Tuples aren't natively supported in JavaScript because all JS data structures are mutable unless you call Object.

The basic tuple in languages like Python and Elm looks like this:
color = (255, 0, 0)

In JavaScript we could represent this same data as:
const color = [255, 0 , 0]

Languages like Python also offer support for named tuples:
color = (red=255, green=0, blue=0)

We can achieve the same result in JS with object literals.
const color = {red: 255, green: 0, blue: 0}

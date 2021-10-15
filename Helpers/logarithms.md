log_10 100 or log_10 (100)  (10 should be subscript of log)

Means "What power do we need to raise this base (10) to, to get this answer (100)?"

    10 ^ x = 100  means What x gets us our result of 100

The answer is 2.

    10 ^ 2 = 100 (or 10 power of 2 is equal 100)

So we can say: log_10 (100) = 2

What logarithms are used for
The main thing we use logarithms for is solving for x when x is in an exponent.

So if we wanted to solve this:

    10 ^ x = 100

We need to bring the x down from the exponent somehow. And logarithms give us a trick for doing that.

We take the log_10 of both sides (we can do this—the two sides of the equation are still equal):

    log_10 (10 ^ x) = log_10 (100)

Now the left-hand side is asking, "what power must we raise 10 to in order to get 10 ^ x ?" The answer, of course, is x. So we can simplify that whole left side to just "x":

    x = log_10 (100)

We've pulled the x down from the exponent!

Now we just have to evaluate the right side. What power do we have to raise 10 to in order to get 100? The answer is still 2.

    x = 2

That's how we use logarithms to pull a variable down from an exponent.

Logarithm rules

These are helpful if you're trying to do some algebra stuff with logs.

Simplification: log_b (b ^ x) = x ... Useful for bringing a variable down from an exponent.

Multiplication: log_b (x * y) = log_b (x) + log_b (y)

Division: log_b (x / y) = log_b (x) - log_b (y)

Powers: log_b (x ^ y) = y * log_b (x)

Change of base: log_b (x) = log_c (x) / log_c (b)  Useful for changing the base of a logarithm from b to c.

Where logs come up in algorithms and interviews

"How many times must we double 1 before we get to n" is a question we often ask ourselves in computer science. Or, equivalently, "How many times must we divide n in half in order to get back down to 1?"

Can you see how those are the same question? We're just going in different directions! From n to 1 by dividing by 2, or from 1 to n by multiplying by 2. Either way, it's the same number of times that we have to do it.

The answer to both of these questions is log_2 (n).

For seeing some example read:

https://www.interviewcake.com/article/python/logarithms?course=fc1&section=algorithmic-thinking
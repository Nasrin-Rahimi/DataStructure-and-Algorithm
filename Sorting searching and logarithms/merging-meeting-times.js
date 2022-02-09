/**
Your company built an in-house calendar tool called HiCal. You want to add a feature to see the 
times in a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored 
as objects ↴ with integer properties startTime and endTime. These integers represent the number 
of 30-minute blocks past 9:00am.

For example:

{ startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns 
an array of condensed ranges.

For example, given:
[
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

your function would return:
[
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]

Do not assume the meetings are in order. The meeting times are coming from multiple teams.

Write a solution that's efficient even when we can't put a nice upper bound on the numbers 
representing our time ranges. Here we've simplified our times down to the number of 30-minute 
slots past 9:00 am. But we want the function to work even for very large numbers, like Unix 
timestamps. In any case, the spirit of the challenge is to merge meetings where startTime and 
endTime don't have an upper bound.
 */

/**
Breakdown
What if we only had two ranges? Let's take:

[{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]

These meetings clearly overlap, so we should merge them to give:

  [{ startTime: 1, endTime: 4 }]

But how did we know that these meetings overlap?

We could tell the meetings overlapped because the end time of the first one was after the start 
time of the second one! But our ideas of "first" and "second" are important here—this only works 
after we ensure that we treat the meeting that starts earlier as the "first" one.

How would we formalize this as an algorithm? Be sure to consider these edge cases:

1- The end time of the first meeting and the start time of the second meeting are equal. 
For example: [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }]

2- The second meeting ends before the first meeting ends. 
For example: [{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]

Here's a formal algorithm:

1- We treat the meeting with earlier start time as "first," and the other as "second."
2- If the end time of the first meeting is equal to or greater than the start time of the second 
meeting, we merge the two meetings into one time range. The resulting time range's start time 
is the first meeting's start, and its end time is the later of the two meetings' end times.
3- Else, we leave them separate.

So, we could compare every meeting to every other meeting in this way, merging them or leaving 
them separate.

Comparing all pairs of meetings would take O(n^2) time. We can do better!
 */

function mergingMeetingTimes(params) {
    
}
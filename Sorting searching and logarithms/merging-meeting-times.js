/**
 * Your company built an in-house calendar tool called HiCal. You want to add a feature 
 * to see the times in a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is 
stored as objects(Helpers/object.md) with integer properties startTime and endTime. These 
integers represent the number of 30-minute blocks past 9:00am.

For example:

{ startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

Write a function mergeRanges() that takes an array of multiple meeting time ranges and 
returns an array of condensed ranges.

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
timestamps. In any case, the spirit of the challenge is to merge meetings where startTime 
and endTime don't have an upper bound.
 */

/**
 * Gotchas:
 * If we have just two meeting like:
 *   [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }]
 * 
 * These meetings should probably be merged, although they don't exactly "overlap"—they just 
 * "touch." Does your function do this?

Look at this case:

  [{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]

Notice that although the second meeting starts later, it ends before the first meeting ends. 
Does your function correctly handle the case where a later meeting is "subsumed by" an 
earlier meeting?

Look at this case:

  [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
]

Here all of our meetings should be merged together into just { startTime: 1, endTime: 10 }. 
We need keep in mind that after we've merged the first two we're not done with the result—the 
result of that merge may itself need to be merged into other meetings as well.

Make sure that your function won't "leave out" the last meeting.
 */

/**
 * Breakdown

What if we only had two ranges? Let's take:

  [{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]

These meetings clearly overlap, so we should merge them to give:

  [{ startTime: 1, endTime: 4 }]

But how did we know that these meetings overlap?

We could tell the meetings overlapped because the end time of the first one was after the 
start time of the second one! But our ideas of "first" and "second" are important here—this 
only works after we ensure that we treat the meeting that starts earlier as the "first" one.

How would we formalize this as an algorithm? Be sure to consider these edge cases:

The end time of the first meeting and the start time of the second meeting are equal. For 
example: [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }]

The second meeting ends before the first meeting ends. For example: 
[{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]

Here's a formal algorithm:

1. We treat the meeting with earlier start time as "first," and the other as "second."
2. If the end time of the first meeting is equal to or greater than the start time of the 
second meeting, we merge the two meetings into one time range. The resulting time range's 
start time is the first meeting's start, and its end time is the later of the two meetings' 
end times.
3. Else, we leave them separate.

So, we could compare every meeting to every other meeting in this way, merging them or 
leaving them separate.

Comparing all pairs of meetings would take O(n^2)time. We can do better!

If we're going to beat O(n^2)time, maybe we're going to get O(n) time? Is there a way to do 
this in one pass?

It'd be great if, for each meeting, we could just try to merge it with the next meeting. 
But that's definitely not sufficient, because the ordering of our meetings is random. 
There might be a non-next meeting that the current meeting could be merged with.

What if we sorted our array of meetings by start time?

Then any meetings that could be merged would always be adjacent!

So we could sort our meetings, then walk through the sorted array and see if each meeting 
can be merged with the one after it.

Sorting takes O(nlgn) time in the worst case. If we can then do the merging in one pass, 
that's another O(n) time, for O(nlgn) overall. That's not as good as O(n), but it's better 
than O(n^2).

 */

/**
 * Solution
First, we sort our input array of meetings by start time so any meetings that might need to 
be merged are now next to each other.

Then we walk through our sorted meetings from left to right. At each step, either:

We can merge the current meeting with the previous one, so we do.
We can't merge the current meeting with the previous one, so we know the previous meeting 
can't be merged with any future meetings and we throw the current meeting into mergedMeetings.

 */

function mergeRanges(meetings) {

  if(meetings == null || meetings.length == 0) {
    throw new Error("Meetings is empty!");
  }

  // Create a deep copy of the meetings array 
  //(check differentiate-between-deep-and-shallow-copies-in-JavaScript)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  // Sort by start time
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  // Initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting    = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    // If the current meeting overlaps with the last merged meeting, use the
    // later end time of the two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
      mergedMeetings[mergedMeetings.length - 1] = lastMergedMeeting;
    } else {

      // Add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}

/**
 * Complexity
O(nlgn) time and O(n) space.

Even though we only walk through our array of meetings once to merge them, we sort all the 
meetings first, giving us a runtime of O(nlgn). It's worth noting that if our input were 
sorted, we could skip the sort and do this in O(n) time!

We create a new array of merged meeting times. In the worst case, none of the meetings 
overlap, giving us an array identical to the input array. Thus we have a worst-case space 
cost of O(n).
 */

/**
 * Bonus
What if we did have an upper bound on the input values? Could we improve our runtime? Would 
it cost us memory?

Yes, we can use counting to sort meetings in o(n) time with the cost of adding count array. 
(see top-score example in this section)

Could we do this "in place" on the input array and save some space? What are the pros and 
cons of doing this in place?
 */

/**
 * What We Learned
This one arguably uses a greedy ↴ approach as well, except this time we had to sort the 
array first.

How did we figure that out?

We started off trying to solve the problem in one pass, and we noticed that it wouldn't 
work. We then noticed the reason it wouldn't work: to see if a given meeting can be merged, 
we have to look at all the other meetings! That's because the order of the meetings is random.

That's what got us thinking: what if the array were sorted? We saw that then a greedy 
approach would work. We had to spend O(nlgn) time on sorting the array, but it was better than our 
initial brute force approach, which cost us O(n^2)time!
 */

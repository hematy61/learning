# New Year Chaos | HackerRank

## Problem Description

On New Year's Day, people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue, ranging from 1 to `n`. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

The goal is to determine the minimum number of bribes that took place to get to a given queue order. If the queue order is achieved with a person bribing more than two others, the output should be "Too chaotic".

### Example

For a queue like `[2, 1, 5, 3, 4]`, only one bribe is required, making the output `1`. However, for a queue like `[2, 5, 1, 3, 4]`, it appears as if one person has bribed more than two people, so the output should be "Too chaotic".

### Function Description

The function `minimumBribes` should be completed. It has the following parameter:

- `int q[n]`: the positions of the people after all bribes

The function doesn't return any value. Instead, it should print the minimum number of bribes necessary or "Too chaotic" if someone has bribed more than two people.

### Input Format

- The first line contains an integer, representing the number of test cases.
- Each of the next pairs of lines are as follows:
  - The first line contains an integer, representing the number of people in the queue.
  - The second line has space-separated integers describing the final state of the queue.

### Constraints

- \(1 \leq n \leq 10^5\)
- \(1 \leq q[i] \leq 10^6\)

### Sample Input

```markdown
2
5
2 1 5 3 4
5
2 5 1 3 4
```

### Sample Output

```markdown
3
Too chaotic
```

### Explanation

For the first test case, the initial state is `[1,2,3,4,5]`. After person 2 bribes person 1, the queue becomes `[2,1,3,4,5]`. Person 5 then bribes person 3 and person 4 to reach the state `[2,1,5,3,4]`, resulting in a total of three bribes.

For the second test case, it appears that person 5 has bribed more than two people, making the state impossible to achieve. Thus, the output is "Too chaotic".

## Solution

### Brute Force Solution

Here is an implementation of the solution in JavaScript:

```javascript
function minimumBribes(q) {

  let bribes = 0
  for(let i = 0; i < q.length; i ++){
    if(q[i] - (i + 1) > 2){
      console.log('Too chaotic')
      return 
    }
    for(let j = i + 1;j < q.length; j++){
      if(q[i] > q[j]) bribes++
    }
    
  }
  console.log(bribes)
}
```

Let's break down the provided solution

```javascript
if(q[i] - (i + 1) > 2){
  console.log('Too chaotic')
  return 
}
```

For each person, the code checks if they are more than 2 positions ahead of their original position. If they are, it means they have bribed more than 2 people, which is not allowed. In such a case, the function prints "Too chaotic".

```javascript
for(let j = i + 1;j < q.length; j++){
```

The inner loop iterates through the people standing behind the current person in the queue.

```javascript
if(q[i] > q[j]) bribes++
```

For each person standing behind the current person, the code checks if their sticker number is smaller than the current person's sticker number. If it is, it means the current person has been overtaken by the person behind them, indicating a bribe. The `bribes` counter is incremented for each such occurrence.

**Complexity**
Let's analyze the time and space complexity:

**Time Complexity:**

1. The outer loop runs for \( n \) iterations, where \( n \) is the length of the array \( q \).

2. For each iteration of the outer loop, the inner loop runs for at most \( n \) iterations in the worst case (when \( i = 0 \)). As \( i \) increases, the number of iterations of the inner loop decreases.

The number of operations can be visualized as:
\[ n + (n-1) + (n-2) + ... + 2 + 1 \]
This is an arithmetic series, and its sum is given by:
\[ \frac{n(n + 1)}{2} \]
This results in a time complexity of \( O(n^2) \).

Proof of the Formula:

1. Consider the sum of the first \(n\) natural numbers:
\[ S = 1 + 2 + 3 + ... + n \]

2. Write the sum in reverse order:
\[ S = n + (n-1) + (n-2) + ... + 1 \]

3. Add the two sequences together:
\[ 2S = (n+1) + (n+1) + (n+1) + ... + (n+1) \]

Notice that each term in the sum is \(n+1\), and there are \(n\) such terms.

Therefore, combining all the terms:
\[ 2S = n(n+1) \]

   Dividing both sides by 2, we get:
\[ S = \frac{n(n + 1)}{2} \]

This is the formula for the sum of the first \(n\) natural numbers.

**Space Complexity:**

The solution uses a constant amount of space to store the `bribes` variable and a few loop counters (\( i \) and \( j \)). No additional data structures or space that scales with the input size are used.

Thus, the space complexity is \( O(1) \).

In summary:

- Time Complexity: \( O(n^2) \)
- Space Complexity: \( O(1) \)

### Optimized solution

#### First Optimized Solution

The problem with the previous solution is that it has the time complexity of \( O(n^2) \). This is because the inner loop runs for \( n \) iterations for each iteration of the outer loop.

The first optimized solution is to reduce the number of iterations in the inner loop. We can use the given fact that each person can bribe at most two others. This means that if a person has bribed more than two people, the queue is too chaotic. We can use this fact to reduce the number of iterations in the inner loop to at most 2.

```javascript
function minimumBribes(queue) {
  let bribes = 0;

  for (let i = 0; i < queue.length; i++) {
    if (queue[i] - (i + 1) > 2) {
      console.log("Too chaotic");
      return;
    }
    for (let j = Math.max(0, queue[i] - 2); j < i; j++) {
      if (queue[j] > queue[i]) bribes++;
    }
  }
  console.log(bribes);
}
```

You're right. I apologize for the oversight. Let's analyze the time complexity again:

### Time Complexity

**Complexity:**
The outer loop iterates over each person in the queue from the beginning to the end, which is \(O(n)\).

The inner loop starts from a position that is at most 2 places before the current position of the outer loop and goes up to the current position of the outer loop. In the worst-case scenario, this loop can run 2 times for each person (because a person can bribe at most 2 others to move ahead). However, as the outer loop progresses, the number of times the inner loop runs can increase, but it's bounded by 2.
Thus, the inner loop runs in \(O(2) = O(1)\) time for each person, but since it's nested within the outer loop, the combined complexity is \(O(n) \times O(1) = O(n)\).

However, when you sum up the number of operations across all iterations, it can be more than \(O(n)\) but less than \(O(n^2)\). This is because the inner loop doesn't always run for all \(n\) elements; it's bounded by 2. So, the worst-case scenario is when every person has bribed two other people, leading to a complexity closer to \(O(2n)\), which is still linear but involves more operations than a simple \(O(n)\).

#### Second Optimized Solution

Previous optimized solution has a time complexity of \( O(2n) \). We can still improve this by reducing the time complexity to \( O(n) \).

```javascript
function minimumBribes(queue) {
 
  let totalBribes = 0;
  let smallestOriginalPosSeen = queue.length;

  for (let currentIndex = queue.length - 1; currentIndex >= 0; currentIndex--) {
    const originalPosOfCurrentPerson = queue[currentIndex];
    const currentPosOfCurrentPerson = currentIndex + 1;

    // we want to discover forward or backward moves of the person. We basically ask
    // the question: "where was the person and where is the person now?". To answer this
    // question, we need to deduct the original position from the current position. A positive
    // number means the person has moved forward and a negative number means the person has
    // moved backward. So if the person has moved backward(toward index 0) more than 2 positions then the
    // queue is too chaotic.
    if (originalPosOfCurrentPerson - currentPosOfCurrentPerson > 2) {
      console.log("Too chaotic");
      return;
    }

    // if the person original position is greater than the current position then
    // they must have bribed their way to the current position (moved to the left).
    // As we have already
    // checked that they have not bribed more than 2 people we can just add the
    // number of bribes they have made by subtracting their original position from
    // their current position
    if (originalPosOfCurrentPerson > currentPosOfCurrentPerson) {
      totalBribes += originalPosOfCurrentPerson - currentPosOfCurrentPerson;
    } else {
      if (originalPosOfCurrentPerson < smallestOriginalPosSeen) {
        smallestOriginalPosSeen = originalPosOfCurrentPerson;

        // There are no two people with the same position in the queue. That's why
        // we do not have a condition to check the original position is equal to
        // the smallest original position seen.
      } else if (originalPosOfCurrentPerson != smallestOriginalPosSeen) {
        totalBribes++;
      }
    }
  }
  console.log(totalBribes);

}
```

**Time Complexity:**

The function iterates through the `queue` array once, from the end to the beginning. This gives a time complexity of \(O(n)\), where \(n\) is the length of the `queue`.

the overall time complexity of the function is:
\[O(n)\]

**Space Complexity**
Variables:

- The function uses a fixed number of auxiliary variables (`totalBribes`, `smallestOriginalPosSeen`, `currentIndex`, `originalPosOfCurrentPerson`, and `currentPosOfCurrentPerson`). These variables do not depend on the size of the input and thus occupy constant space.

No Additional Data Structures:

- The function does not use any additional data structures (like arrays or objects) that grow with the size of the input.

Given the above, the space complexity of the function is:
\[O(1)\]

In summary:

- Time Complexity: \(O(n)\)
- Space Complexity: \(O(1)\)

## References

[HackerRank](https://www.hackerrank.com/challenges/new-year-chaos/problem)

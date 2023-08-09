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

## Time and Space Complexity

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

## References

[HackerRank](https://www.hackerrank.com/challenges/new-year-chaos/problem)

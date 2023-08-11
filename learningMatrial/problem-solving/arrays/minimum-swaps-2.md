
# Minimum Swaps 2

## Problem

You are given an unordered array consisting of consecutive integers `[1, 2, 3, ..., n]` without any duplicates. You are allowed to swap any two elements. The goal is to find the minimum number of swaps required to sort the array in ascending order.

**Example**
Consider the array: `[7, 1, 3, 2, 4, 5, 6]`

Perform the following steps:

| Iteration | Array State           | Swap (Indices) |
| --------- | --------------------- | -------------- |
| 0         | [7, 1, 3, 2, 4, 5, 6] | swap (0,3)     |
| 1         | [2, 1, 3, 7, 4, 5, 6] | swap (0,1)     |
| 2         | [1, 2, 3, 7, 4, 5, 6] | swap (3,4)     |
| 3         | [1, 2, 3, 4, 7, 5, 6] | swap (4,5)     |
| 4         | [1, 2, 3, 4, 5, 7, 6] | swap (5,6)     |
| 5         | [1, 2, 3, 4, 5, 6, 7] | -              |

It took 5 swaps to sort the array.

**Parameters:**

- `int arr[n]`: an unordered array of integers

**Returns:**

- `int`: the minimum number of swaps to sort the array

## Input Format

- The first line contains an integer, n, the size of arr.
- The second line contains n space-separated integers.

**Constraints**
\(1 \leq n \leq 10^5\)
\(1 \leq \text{arr}[i] \leq n\)

### Samples

### First Sample

**Input**:

```markdown
4
4 3 1 2
```

**Output**:

```markdown
3
```

**First Sample Explanation**
Given array: `[4, 3, 1, 2]`
After swapping (0,2) we get: `[1, 3, 4, 2]`
After swapping (1,2) we get: `[1, 4, 3, 2]`
After swapping (1,3) we get: `[1, 2, 3, 4]`
So, we need a minimum of 3 swaps to sort the array in ascending order.

### Second Sample

**Input**:

```markdown
5
2 3 4 1 5
```

**Output**:

```markdown
3
```

**First Sample Explanation**
Given array: `[2, 3, 4, 1, 5]`
(0,3) --> `[1, 3, 4, 2, 5]`
(1,3) --> `[1, 2, 4, 3, 5]`
(2,3) --> `[1, 2, 3, 4, 5]`

After swapping (2,3) we get: `[2, 3, 1, 4, 5]`
After swapping (0,1) we get: `[3, 2, 1, 4, 5]`
After swapping (0,2) we get: `[1, 2, 3, 4, 5]`
So, we need a minimum of 3 swaps to sort the array in ascending order.

### Third Sample

**Input**:

```markdown
7
1 3 5 2 4 6 7
```

**Output**:

```markdown
3
```

**First Sample Explanation**
Given array: `[1, 3, 5, 2, 4, 6, 7]`
After swapping (1,3) we get: `[1, 2, 5, 3, 4, 6, 7]`
After swapping (2,3) we get: `[1, 2, 3, 5, 4, 6, 7]`
After swapping (3,4) we get: `[1, 2, 3, 4, 5, 6, 7]`
So, we need a minimum of 3 swaps to sort the array in ascending order.

## Solution

```javascript
function minimumSwaps(arr) {
  let swaps = 0;
  let i = 0;

  while (i < arr.length) {
    if (arr[i] !== i + 1) {
      const temp = arr[i];
      arr[i] = arr[temp - 1];
      arr[temp - 1] = temp;
      swaps++;
    } else {
      i++;
    }
  }

  return swaps;
}
```

**Time Complexity**
The loop continues as long as `i` is less than `arr.length`. Within the loop:

1. If `arr[i]` is not in its correct position (`arr[i] !== i + 1`), a swap is made, and the value of `i` remains unchanged. This means the loop will consider the same index `i` in the next iteration.
2. If `arr[i]` is in its correct position, the loop increments `i`.

Given this, it's possible for the loop to iterate more than `n` times (where `n` is the length of the array). Specifically, for every element that's out of place, the loop will iterate an additional time (because `i` doesn't increment in those cases). In the worst-case scenario, where every element is out of place, the loop can iterate up to `2n` times.

In the worst-case scenario, the loop can iterate up to `2n` times, making the time complexity **O(2n)**. However, in big O notation, we typically drop constant multipliers, so the time complexity is still represented as **O(n)**.

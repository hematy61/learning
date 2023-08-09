# Arrays: Left Rotation | HackerRank

## Problem Description

A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array `[1,2,3,4,5]`, then the array would become `[3,4,5,1,2]`. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

Given an array of integers and a number, `d`, perform `d` left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

### Function Description

Complete the function `rotLeft` in the editor below.

**Parameters:**

- `int a[n]`: the array to rotate
- `int d`: the number of rotations

**Returns:**

- `int a[n]`: the rotated array

### Input Format

The first line contains two space-separated integers `n` and `d`, the size of `a` and the number of left rotations.
The second line contains `n` space-separated integers, each an element of array `a`.

**Constraints**
These are the constraints on the input:

- \(1 \leq n \leq 10^5\)
- \(1 \leq d \leq n\)
- \(1 \leq a[i] \leq 10^6\)

**Sample Input**
Consider the following array of  integers, which in the first line, the number 5 indicates the size of the array and 4 indicates the number of left rotations:

```markdown
5 4
1 2 3 4 5
```

**Sample Output**
After performing 4 left rotations, the array becomes:

```markdown
5 1 2 3 4
```

**Explanation**
When we perform 4 left rotations, the array undergoes the following sequence of changes:

`[1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,1,2] -> [4,5,1,2,3] -> [5,1,2,3,4]`

## Solution

Here is an implementation of the solution in JavaScript:

```javascript
function rotLeft(a, d) {
  return [...a.slice(d, a.length), ...a.slice(0, d)] 
}
```

Here's a breakdown of the solution:

1. `a.slice(d, a.length)` slices the array from index `d` to the end. This represents the portion of the array that will be moved to the front after the rotations.
2. `a.slice(0, d)` slices the array from the beginning to index `d`. This represents the portion of the array that will be moved to the back after the rotations.
3. The spread operator (`...`) is used to combine these two sliced portions into a single array, achieving the desired left rotation.

Here's the solution for the problem in Python:

```python {cmd}
def rotLeft(a, d):
    # Use slicing to rearrange the array based on the number of rotations d
    return a[d:] + a[:d]

# Sample Input
a = [1, 2, 3, 4, 5]
d = 4

# Sample Output
print(rotLeft(a, d))  # Expected Output: [5, 1, 2, 3, 4]
```

Python's list slicing makes this solution particularly concise. The logic remains the same as the JavaScript version: slice the array based on the number of rotations and rearrange the two parts to achieve the left rotation.

## Time and Space Complexity

**Time Complexity:**  
The solution involves slicing the array (or list) twice. In both Python and JavaScript, the slicing operation has a time complexity of \(O(n)\), where \(n\) is the size of the slice. Given that we perform two slice operations, the overall time complexity is:

\[O(n) + O(n) = O(2n)\]

This simplifies to:

\[O(n)\]

**Space Complexity:**  
The solution creates two new arrays (or lists) from the slicing operations, and then another array (or list) when these slices are concatenated or spread into a new array using the spread operator in JavaScript or list concatenation in Python. The space required for these new arrays or lists is proportional to the size of the original array or list \(n\). Therefore, the space complexity is:

\[O(n)\]

In summary, for the solution in both languages, the time and space complexities are \(O(n)\).

## References

[HackerRank](https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem)

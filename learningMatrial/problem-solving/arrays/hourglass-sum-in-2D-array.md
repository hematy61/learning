
# Hourglass Sum in 2D Array

Given a 2D Array:

```markdown
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
```

An hourglass in the array is a subset of values with indices falling in this pattern:

```markdown
a b c
  d
e f g
```

There are 16 hourglasses in the array. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in the array, then print the maximum hourglass sum. The array will always be 6x6.

## Example

```markdown
-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
```

The 16 hourglass sums are:

```markdown
-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18
```

The highest hourglass sum is 28 from the hourglass beginning at row 3, column 2:

```markdown
0 4 3
  1
8 6 6
```

## Function Description

Complete the function `hourglassSum`:

```javascript
function hourglassSum(arr) {
    // Your code here
}
```

**Parameters:**

- `int arr[6][6]`: an array of integers

**Returns:**

- `int`: the maximum hourglass sum

**Input Format**
Each of the 6 lines of inputs contains 6 space-separated integers.

**Constraints**
Each integer in the array will be in the range [-9, 9].

**Output Format**
Print the largest (maximum) hourglass sum found in the array.

**Sample Input**
Consider the following 6x6 array:

```markdown
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
```

**Sample Output**
The output should be:

```markdown
19
```

**Explanation**
The hourglass with the maximum sum (19) is:

```markdown
2 4 4
  2
1 2 4
```

## Solution

Here is an implementation of the solution in JavaScript:

```javascript
function hourglassSum(arr) {
  let maxSum = -63; // Minimum possible value for an hourglass (-9 * 7)

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      // Calculate the sum of the current hourglass
      let currentSum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];

      // Update maxSum if the current hourglass sum is greater
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

const firstInput = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const secondInput = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(firstInput)); // Output: 28
console.log(hourglassSum(secondInput)); // Output: 19
```

Here is the same implementation in Python:

```python {cmd}
def hourglassSum(arr):
    max_sum = -63  # Minimum possible value for an hourglass (-9 * 7)
    
    for i in range(4):
        for j in range(4):
            # Calculate the sum of the current hourglass
            current_sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + \
                          arr[i+1][j+1] + \
                          arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            
            # Update max_sum if the current hourglass sum is greater
            max_sum = max(max_sum, current_sum)
            
    return max_sum

# Sample Input
arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

print(hourglassSum(arr))  # Expected Output: 19
```

## Time and Space Complexity

**Time Complexity:**
The solution involves two nested loops that iterate over the 2D array. Since the array is of fixed size 6x6, and the loops iterate up to 4x4 (to ensure that a complete hourglass can be formed), the time complexity is:

\[ O(4 \times 4) = O(16) = O(1) \]

This is a constant time complexity because no matter the input, the number of operations remains the same due to the fixed size of the array.

**Space Complexity:**
The solution uses a constant amount of extra space to store variables like maxSum and currentSum. No additional data structures that grow with the input size are used. Therefore, the space complexity is:

\[O(1)\]

In summary, both the time and space complexities of the solution are **O(1)**.

## References

- [HackerRank](https://www.hackerrank.com/challenges/2d-array/problem)

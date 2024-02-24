grades = {
    'Alice': 75,
    'Bob': 85,
    'Charlie': 90,
    'David': 80,
    'Emily': 95
}
filtered_grades = dict(
    filter(lambda grade: grade[1] > 80, grades.items())
)
print(filtered_grades)  # Output: {'Bob': 85, 'Charlie': 90, 'Emily': 95}

import sys

getInput = sys.stdin.readline

n = int(getInput())
array = []

for i in range(n):
  array.append(int(getInput()))

array = sorted(array, reverse=True)

for i in array:
  print(i, end=" ")
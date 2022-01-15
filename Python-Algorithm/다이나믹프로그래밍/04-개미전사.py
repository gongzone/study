import sys
getInput = sys.stdin.readline

n = int(getInput())

array = list(map(int, getInput().rstrip().split()))

d = [0] * 100

d[0] = array[0]
d[1] = max(array[0], array[1])

for i in range(2, n):
  d[i] = max(d[i - 1], d[i - 2] + array[i])

print(d[n - 1])


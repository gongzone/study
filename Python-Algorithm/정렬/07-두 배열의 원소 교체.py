import sys

getInput = sys.stdin.readline

n, k = map(int, getInput().split())

a = list(map(int, getInput().split()))
b = list(map(int, getInput().split()))

a.sort()
b.sort(reverse=True)

for i in range(k):
  if a[i] < b[i]:
    a[i], b[i] = b[i], a[i]
  else:
    break

print(sum(a))

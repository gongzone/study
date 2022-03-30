import sys
getInput = sys.stdin.readline

n, m = map(int, getInput().rstrip().split())
array = []

for i in range(n):
  array.append(int(getInput()))

dp = [10001] * (m + 1)

dp[0] = 0

for i in range(n):
  for j in range(array[i], m + 1):
    if dp[j - array[i]] != 10001:
      dp[j] = min(dp[j], dp[j - array[i]] + 1)

if dp[m] == 10001:
  print(-1)
else:
  print(dp[m])



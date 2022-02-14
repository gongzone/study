import sys

getInput = sys.stdin.readline

n = int(getInput())
data = list(map(int, getInput().rstrip().split()))
data.sort()

count = 0
group_number = 0

for i in data:
  count += 1
  if count >= i:
    group_number += 1
    count = 0

print(group_number)
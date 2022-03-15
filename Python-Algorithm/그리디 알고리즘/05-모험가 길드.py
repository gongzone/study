import sys
getInput = sys.stdin.readline

n = int(getInput())
array = list(map(int, getInput().rstrip().split()))
array.sort()

result = 0
count = 0

for i in array:
  count += 1
  if count >= i:
    result += 1
    count = 0

print(result)



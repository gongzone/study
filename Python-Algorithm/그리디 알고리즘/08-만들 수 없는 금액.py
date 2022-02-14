import sys

getInput = sys.stdin.readline

n = int(getInput())
data = list(map(int, getInput().rstrip().split()))
data.sort()

def get_result():
  target = 1
  for x in data:
    if target < x:
      return target
    else:
      target += x
      continue

result = get_result()
print(result)

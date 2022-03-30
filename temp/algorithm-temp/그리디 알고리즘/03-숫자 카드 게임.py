import sys
getInput = sys.stdin.readline

n, m = map(int, getInput().rstrip().split())
max_num = 0

for _ in range(n):
    array = list(map(int, getInput().rstrip().split()))
    min_num = min(array)
    max_num = max(min_num, max_num)

print(max_num)
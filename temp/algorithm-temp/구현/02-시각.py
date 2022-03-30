# 구현(완전탐색) - 02.시각

import sys

getInput = sys.stdin.readline

h = int(getInput())
count = 0

for i in range(h + 1):
    for j in range(60):
        for k in range(60):
            if '3' in str(i) + str(j) + str(k):
                count += 1

print(count)

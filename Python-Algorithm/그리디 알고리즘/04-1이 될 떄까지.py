import sys
getInput = sys.stdin.readline   

n, k = map(int, getInput().rstrip().split())
answer = 0

while True:
    target = (n // k) * k
    answer += n - target
    n = target

    if n < k:
        break

    answer += 1
    n //= k

answer += (n - 1)

print(answer)

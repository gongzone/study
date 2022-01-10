import sys

# 그리디 - 04.1이 될 떄까지
# 핵심: 최대한 많이 나누기를 수행

getInput = sys.stdin.readline

# N, K를 공백으로 구분하여 입력받기
n, k = map(int, getInput().split())
result = 0

while True:
    # (N이 K로 나누어떨어지는 수)가 될 때까지 1씩 뺴기
    target = (n // k) * k
    result += (n - target)

    n = target

    # N이 K보다 적을 때(더 이상 나눌 수 없을 때) 반복문 탈출
    if n < k:
        break

    # K로 나누기
    n //= k
    result += 1

# 마지막으로 남은 수에 대하여 1씩 빼기
result += (n - 1)
print(result)


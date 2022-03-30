import sys

# 그리디 - 01.거스름돈
# 핵심: 가장 큰 화폐부터 먼저 돈을 거슬러 주는 것.
# 알고리즘 정당성: 큰 화폐가 작은 화폐의 배수이기 때문에

n = int(sys.stdin.readline())
count = 0

coins = [500, 100, 50, 10]

for coin in coins:
    count += n // coin
    n %= coin
    if n == 0:
        break

print(count)




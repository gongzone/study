import sys

# 그리디 - 02.큰 수의 법칙
# 핵심: 반복되는 수열 파악 (제일 큰 수는 몇번 반복, 그 다음 큰수는 몇번 반복)

# N, M, K를 공백으로 구분하여 입력받기
n, m, k = map(int, sys.stdin.readline().split())

# N개의 수를 공백으로 구분하여 입력받기
data = list(map(int, sys.stdin.readline().split()))

data.sort() # 입력받은 수 정렬
first = data[n-1]  # 가장 큰 수
second = data[n-2]  # 두 번째로 큰 수

# 가장 큰 수가 더해지는 횟수 계산
count = (m // (k+1)) * k
count += m % (k + 1)

result = 0
result += count * first # 가장 큰 수 더하기
result += (m - count) * second # 두 번째로 큰 수 더하기

print(result) # 최종 답안 제출

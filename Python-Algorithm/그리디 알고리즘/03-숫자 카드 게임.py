import sys

# 그리디 - 03.숫자 카드 게임
# 핵심: 각 행마다 가장 작은 수를 찾은 뒤에 그 수 중에서 가장 큰 수를 찾는 것

getInput = sys.stdin.readline

# N,M을 공백으로 구분하여 입력받기
n, m = map(int, getInput().split())

result = 0

# 한 줄씩 입력받아 확인
for i in range(n):
    data = list(map(int, getInput().split()))
    # 현재 줄에서 `가장 작은 수` 찾기
    min_value = min(data)
    # `가장 작은 수`들 중에서 가장 큰 수 찾기
    result = max(result, min_value)

print(result) # 최종 답안 출력


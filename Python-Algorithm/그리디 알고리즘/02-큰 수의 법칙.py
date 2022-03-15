import sys
getInput = sys.stdin.readline

n, m, k = map(int, getInput().rstrip().split()) # n: 배열의 길이, m: 더할 수 있는 개수, k: 반복 허용 개수 
array = list(map(int, getInput().rstrip().split()))
array.sort() # 오름차순 정렬

first_num = array[n-1] # 첫 번쨰로 큰 수
second_num = array[n-2] # 두 번째로 큰 수
count = 0 # 첫 번째로 큰 수가 더해지는 횟수

count = (m // (k+1)) * k
count += m % (k+1)

answer = first_num * count
answer += second_num * (m - count) 

print(answer)

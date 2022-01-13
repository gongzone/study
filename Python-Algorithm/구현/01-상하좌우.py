# 구현(시뮬레이션) - 01.상하좌우

import sys

getInput = sys.stdin.readline

n = int(getInput())
commands = getInput().split()

x, y = 1, 1
nx, ny = 0, 0

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
move_types = ['L', 'R', 'U', 'D']

for command in commands:
    for i in range(len(move_types)):
        if command == move_types[i]:
            nx = x + dx[i]
            ny = y + dy[i]

        if nx < 1 or ny < 1 or nx > n or ny > n:
            continue

        x, y = nx, ny

print(x, y)





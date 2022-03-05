import sys
from collections import deque

getInput = sys.stdin.readline

n, m, k, x = map(int, getInput().rstrip().split())
graph = [[] for _ in range(n+1)]

for _ in range(m):
  a, b = map(int, getInput().rstrip().split())
  graph[a].append(b)

distance = [-1] * (n+1)
distance[x] = 0

queue = deque([x])
while queue:
  now = queue.popleft()

  for next_node in graph[now]:
    if distance[next_node] == -1:
      distance[next_node] = distance[now] + 1
      queue.append(next_node)

check = False
for i in range(1, n+1):
  if distance[i] == k:
    print(i)
    check = True

if check == False:
  print(-1)
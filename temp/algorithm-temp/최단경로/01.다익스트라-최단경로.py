import sys
import heapq

getInput = sys.stdin.readline
INF = int(1e9)

node, edge = map(int, getInput().split())
start = int(getInput())

graph = [[] for _ in range(node + 1)]
distance = [INF] * (node + 1)

for _ in range(edge):
  a, b , c = map(int, input().split())
  graph[a].append((b, c))

def dijkstra(start):
  q = []
  heapq.heappush(q, (0, start))
  distance[start] = 0

  while q:
    dist, now = heapq.heappop(q)
    if distance[now] < dist:
      continue

    for i in graph[now]:
      cost = dist + i[1]
      if cost < distance[i[0]]:
        distance[i[0]] = cost
        heapq.heappush(q, (cost, i[0]))

dijkstra(start)

for i in range(1, node + 1):
  if distance[i] == INF:
    print("INFINITY")
  else:
    print(distance[i])




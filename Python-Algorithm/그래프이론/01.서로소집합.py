from gettext import find
import sys
getInput = sys.stdin.readline

v, e = map(int, getInput().split())
parent = [0] * (v + 1)

for i in range(1, v + 1):
  parent[i] = i

def find_parent(parent, x):
  if parent[x] != x:
    parent[x] = find_parent(parent, parent[x])
  return parent[x]

def union_parent(parent, a, b):
  a = find_parent(parent, a)
  b = find_parent(parent, b)
  
  if a < b:
    parent[b] = a
  else:
    parent[a] = b

for i in range(e):
  a, b = map(int, getInput().split())
  union_parent(parent, a, b)

print('각 원소가 속한 집합:', end=" ")
for i in range(1, v + 1):
  print(find_parent(parent, i), end=" ")

print()

print('부모 테이블:', end=" ")
for i in range(1, v + 1):
  print(parent[i], end=' ')
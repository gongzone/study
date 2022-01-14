import sys
getInput = sys.stdin.readline

n = int(getInput().rstrip())
n_array = list(map(int, getInput().rstrip().split()))
n_array.sort()

m = int(getInput().rstrip())
m_array = list(map(int, getInput().rstrip().split()))

def binary_search(array, target, start, end):
  while start <= end:
    mid = (start + end) // 2

    if array[mid] == target:
      return mid
    elif array[mid] > target:
      end = mid - 1
    else:
      start = mid + 1
  
  return None

for i in m_array:
  result = binary_search(n_array, i, 0, n - 1)
  
  if result != None:
    print('yes', end=" ")
  else:
    print('no', end=" ")

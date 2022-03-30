import sys
getInput = sys.stdin.readline

n = int(getInput)
coin_types = list(map(int, getInput().rstrip().split()))
coin_types.sort()



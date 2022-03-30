import sys

getInput = sys.stdin.readline

string_input = list(getInput().rstrip())
result = []
value = 0

for x in string_input:
  if x.isalpha():
    result.append(x)
  else:
    value += int(x)

result.sort()

if value != 0:
  result.append(str(value))

print(''.join(result))
import sys
getInput = sys.stdin.readline

string_input = getInput().rstrip()

def solution(s):
    answer = len(s)

    for step in range(1, len(s) // 2 + 1):
      compressed_string = ""
      prev = s[0:step]
      count = 1
      for j in range(step, len(s), step):
        if prev == s[j:j + step]:
          count += 1
        else:
          compressed_string += str(count) + prev if count >= 2 else prev
          prev = s[j:j + step]
          count = 1
      
      compressed_string += str(count) + prev if count >= 2 else prev
      answer = min(answer, len(compressed_string))
    return answer

print(solution(string_input))
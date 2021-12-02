#INPUT
lines = [int(x) for x in open('input.txt').read().split()]

#FIRST PROBLEM
def problemPart1(data):
    count = 0

    for i in range(1, len(data)):
        if data[i] > data[i-1]:
            count += 1
    print(count)

#SECOND PROBLEM
def problemPart2(data):
    count = 0
    for i in range(2, len(data)-1):
        first = data[i-2] + data[i-1] + data[i]
        second = data[i-1] + data[i] + data[i+1]
        if second > first:
            count += 1
    print(count)

problemPart1(lines)
problemPart2(lines)

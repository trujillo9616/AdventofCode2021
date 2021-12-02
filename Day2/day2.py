#INPUT
lines = open('input.txt').read().split()
dummy = ['forward', '5', 'down', '5', 'forward', '8', 'up', '3', 'down', '8', 'forward', '2']
#FIRST PROBLEM
def problemPart1(data):
    horizontal = 0
    depth = 0
    for i in range(0, len(data), 2):
        if data[i] == 'down':
            depth += int(data[i+1])
        elif data[i] == 'up':
            depth -= int(data[i+1])
        else:
            horizontal += int(data[i+1])

    return(horizontal*depth)

#SECOND PROBLEM
def problemPart2(data):
    horizontal = 0
    depth = 0
    aim = 0
    for i in range(0, len(data), 2):
        num = data[i+1]
        if data[i] == 'down':
            aim += int(num)
        elif data[i] == 'up':
            aim -= int(num)
        else:
            horizontal += int(num)
            depth = depth + (aim*int(num))

    return(horizontal*depth)

print(problemPart1(lines))
print(problemPart2(lines))

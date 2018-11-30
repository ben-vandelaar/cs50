

height = 5

if height >= 1 and height < 23:
    for i in range(height):
        for j in range(height):
            if i + j < height - 1:
                print("_")
            else:
                print("#")
        print("")

for i in range(height):
    for j in range(height):
        print("#", end='')
    print()

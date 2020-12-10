lines = [
]


def load_data(fileName):
    global lines
    with open(fileName, "r") as input_data:
        lines = input_data.readlines()
    for i in range(len(lines)):
        lines[i] = lines[i].strip()


def myHelperFunction():
    global lines
    pass

def problemTwo():
    global lines
    
    for a in lines:
        for b in lines:
            for c in lines:
                #print(int(a)+int(b))
                x = int(a)
                y = int(b)
                z = int(c)
                if 2020 == x + y + z:
                    print(x,y,z,x+y+z,x*y*z)
                    return
        

if __name__ == "__main__":
    load_data("day1-numbers.txt")
    problemTwo()
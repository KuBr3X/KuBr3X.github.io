with open("day2-input.csv") as data:
    reader = csv.reader(data, delimiter='')


    vaildCount = 0
    for row in reader:
        quota, letter, pw = row[0], row[1][0], row[2]

        i = quota.index('-')
        lower = int(quota[:i])
        upper = int(quota[i+1:])

        count = 0
        first = pw[lower-1] == letter
        last = pw[upper-1] == letter

        if (first and not last) or (last and not first):
            vaildCount += 1

print(vaildCount)
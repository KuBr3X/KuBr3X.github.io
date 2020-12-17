# importere excel ark ind i min python
import csv

# day2 part 1
# åbner min excel fil som data
with open('day2-input.csv') as data:
    reader = csv.reader(data, delimiter=' ')

# aflæser tal, bogstaver og abcde
    vaildCount = 0
    for row in reader:
        quota, letter, pw = row[0], row[1][0], row[2]

        # aflæser tal i 
        i = quota.index('-')
        lower = int(quota[:i])
        upper = int(quota[i+1:])

        count = 0
        for character in pw:
            if character == letter:
                count += 1
        
        if count >= lower and count <= upper:
            vaildCount += 1

print(vaildCount)

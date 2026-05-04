def is_armstrong_number(number):
    stringNumb = str(number)
    length = len(stringNumb)
    result = 0
    for numb in stringNumb:
        result += int(numb) ** length

    return result == number
        
    
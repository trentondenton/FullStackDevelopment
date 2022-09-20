def roman_to_int(x): 
    roman_ints = {
      'I': 1, 
      'V': 5, 
      'X': 10, 
      'L': 50, 
      'C': 100, 
      'D': 500, 
      'M': 1000
      } 
    index_val = 0
    for i in range(len(x)): 
        if i > 0 and roman_ints[x[i]] > roman_ints[x[i - 1]]: 
            index_val += roman_ints[x[i]] - 2 * roman_ints[x[i - 1]] 
        else: 
            index_val += roman_ints[x[i]] 
    return index_val

print(roman_to_int('XIV'))
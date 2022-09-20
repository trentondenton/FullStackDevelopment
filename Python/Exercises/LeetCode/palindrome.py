x = 'mom'


def isPalindrome(self, s: str) -> bool:
    a_str = ''
    for char in s:
        if char.isalnum():
            a_str += char.lower()
    return a_str == new_str[::-1]


isPalindrome(x)

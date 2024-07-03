import sys
import string

def rot13(words):
    alp = list(string.ascii_lowercase)
    step = 13
    new_alp = []

    for i in range(len(alp)):
        new_alp.append(alp[(i+step) % 26])

    print(f"Entered: {words}")
    new_word = []
    for word in words:
        for w in word:
            new_word.append(new_alp[alp.index(w)])
        new_word.append(" ")
    print(f"ROT13: {''.join(new_word)}")
        



if __name__ == "__main__":
    rot13(sys.argv[1:])
    #no error handling

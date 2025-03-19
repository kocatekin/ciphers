import hashlib
import sys
import requests as req

def lookup(pwd):
   my_hash = hashlib.sha1(pwd.encode('utf-8')).hexdigest().upper()
   url = f"https://api.pwnedpasswords.com/range/{my_hash[0:5]}"
   res = req.get(url).text.splitlines()

   for elm in res:
      k,v = elm.split(":")
      if(my_hash == my_hash[0:5] + k):
         #print(f"{k} - {my_hash}")
         print(f"⚠️  Found in {v} breaches!")
         return
   print("✅ Safe and sound!")
if __name__ == "__main__":
   lookup(sys.argv[1])

# usage
# python3 haveibeenpwned.py <yourpassword>

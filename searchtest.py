import requests


res = requests.get("http://127.0.0.1:7000/google/search?lang=EN&limit=1000&text=hi")
print(res.text)
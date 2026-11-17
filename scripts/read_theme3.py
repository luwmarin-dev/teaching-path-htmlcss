with open('html-css/src/modules/curriculum.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find("id: 'theme-3-tables',")
end = text.find("id: 'theme-4-pictures',", start)
print(text[start:start+1800])

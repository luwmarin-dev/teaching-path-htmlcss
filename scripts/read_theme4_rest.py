with open('html-css/src/modules/curriculum.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find("id: 'theme-4-pictures',")
end = text.find("id: 'theme-5-divs',", start)
print(text[start+800:start+2200])

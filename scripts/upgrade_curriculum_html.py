import re

with open('html-css/src/modules/curriculum.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's inspect theme-22-position
theme22_match = re.search(r"id:\s*'theme-22-position'.*?(?=id:\s*'theme-23|\Z)", content, re.DOTALL)
if theme22_match:
    print("Found Theme 22 block length:", len(theme22_match.group(0)))
else:
    print("Theme 22 NOT found")

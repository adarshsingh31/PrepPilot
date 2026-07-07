import re

with open("README.md", "r", encoding="utf-8") as f:
    content = f.read()

content = re.sub(
    r'<img src="(\./frontend/image/[^"]+)" width="100%"/>',
    r'<a href="\1" target="_blank"><img src="\1" width="100%"/></a>',
    content
)

with open("README.md", "w", encoding="utf-8") as f:
    f.write(content)

print("Images wrapped successfully.")

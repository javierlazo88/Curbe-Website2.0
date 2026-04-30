#!/usr/bin/env python3
import re

# Read the backup file
with open("/Users/javierlazo/Desktop/Proyecto Curbe/client/src/components/sections/RespondStyleHomepage.tsx.bak", "r") as f:
    content = f.read()

# Find HeroAurora function
pattern = r'function\s+HeroAurora\s*\([^)]*\)\s*{'
match = re.search(pattern, content)

if not match:
    print("Could not find HeroAurora function!")
    exit(1)

start = match.start()
print(f"HeroAurora starts at character {start}")

# Find the end of the function (matching braces)
brace_count = 0
in_string = False
string_char = None
end = start

for j in range(start, len(content)):
    char = content[j]
    if char in '"\'`':
        if not in_string:
            in_string = True
            string_char = char
        elif char == string_char and content[j-1] != '\\':
            in_string = False
    elif not in_string:
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                end = j + 1
                break

print(f"HeroAurora ends at character {end}")
func_content = content[start:end]
print(f"Function length: {len(func_content)} chars")

# Write to file
target_file = "/Users/javierlazo/Desktop/Proyecto Curbe/client/src/components/sections/respond-style/HeroAurora.tsx"
with open(target_file, "w") as out:
    out.write(func_content)

print(f"Written to {target_file}")

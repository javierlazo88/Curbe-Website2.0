#!/usr/bin/env python3
import re

# Read the file
with open("/Users/javierlazo/Desktop/Proyecto Curbe/client/src/components/sections/RespondStyleHomepage.tsx", "r") as f:
    content = f.read()

# Find the main RespondStyleHomepage function
pattern = r'function\s+RespondStyleHomepage\s*\([^)]*\)\s*{'
match = re.search(pattern, content)

if not match:
    print("Could not find RespondStyleHomepage function!")
    exit(1)

main_start = match.start()
print(f"Main function starts at character {main_start}")

# Find the end of the main function
brace_count = 0
in_string = False
string_char = None
main_end = main_start

for j in range(main_start, len(content)):
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
                main_end = j + 1
                break

print(f"Main function ends at character {main_end}")

# Extract what we want to keep:
# 1. Everything BEFORE the main function (imports, ad data, etc.)
# But we need to REMOVE the extracted functions

# Find all function definitions (except RespondStyleHomepage)
pattern = r'function\s+(\w+)\s*\([^)]*\)\s*{'
matches = list(re.finditer(pattern, content))

# Sort matches by start position (descending) so we can delete from end to start
matches.sort(key=lambda x: x.start(), reverse=True)

print(f"\nRemoving {len(matches)} functions from main file...")

clean_content = content
for match in matches:
    func_name = match.group(1)
    if func_name == 'RespondStyleHomepage':
        continue  # Skip main function
    
    func_start = match.start()
    
    # Find end of function
    brace_count = 0
    in_string = False
    string_char = None
    func_end = func_start
    
    for j in range(func_start, len(clean_content)):
        char = clean_content[j]
        if char in '"\'`':
            if not in_string:
                in_string = True
                string_char = char
            elif char == string_char and clean_content[j-1] != '\\':
                in_string = False
        elif not in_string:
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    func_end = j + 1
                    break
    
    print(f"  Removing {func_name} (chars {func_start}-{func_end})")
    clean_content = clean_content[:func_start] + clean_content[func_end:]

# Write the clean file
with open("/Users/javierlazo/Desktop/Proyecto Curbe/client/src/components/sections/RespondStyleHomepage.tsx", "w") as f:
    f.write(clean_content)

print("\nDone! File cleaned.")

#!/usr/bin/env python3
import re

# Read the current file
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
# But we need to REMOVE the extracted functions from this part

# Get the part before main function
before_main = content[:main_start]

# Remove all function definitions (except RespondStyleHomepage which isn't in before_main)
# Find all function definitions
func_pattern = r'function\s+\w+\s*\([^)]*\)\s*{'
func_matches = list(re.finditer(func_pattern, before_main))

print(f"\nFound {len(func_matches)} functions before main function")

# Sort in reverse order to delete from end
func_matches_sorted = sorted(func_matches, key=lambda x: x.start(), reverse=True)

clean_before = before_main
for func_match in func_matches_sorted:
    func_name = func_match.group().split()[1].split('(')[0]
    if func_name == 'RespondStyleHomepage':
        continue
    
    func_start = func_match.start()
    
    # Find end of function
    brace_count = 0
    in_string = False
    string_char = None
    func_end = func_start
    
    for j in range(func_start, len(clean_before)):
        char = clean_before[j]
        if char in '"\'`':
            if not in_string:
                in_string = True
                string_char = char
            elif char == string_char and clean_before[j-1] != '\\':
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
    clean_before = clean_before[:func_start] + clean_before[func_end:]

# Now get the main function
main_func = content[main_start:main_end]

# Write the new file
new_content = clean_before.rstrip() + "\n\n" + main_func.lstrip()

with open("/Users/javierlazo/Desktop/Proyecto Curbe/client/src/components/sections/RespondStyleHomepage.tsx", "w") as f:
    f.write(new_content)

print(f"\nDone! New file created.")
print(f"Original length: {len(content)} chars")
print(f"New length: {len(new_content)} chars")

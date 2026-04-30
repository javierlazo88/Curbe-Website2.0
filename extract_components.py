#!/usr/bin/env python3
import re
import sys

# Read the file
with open("/Users/javierlazo/Desktop/Proyecto Curbe/client/src/components/sections/RespondStyleHomepage.tsx", "r") as f:
    content = f.read()

# Find all function definitions
pattern = r'function\s+(\w+)\s*\([^)]*\)\s*{'
matches = list(re.finditer(pattern, content))

print(f"Found {len(matches)} functions:")
for i, match in enumerate(matches):
    func_name = match.group(1)
    start = match.start()
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
    print(f"{i+1}. {func_name} at line {content[:start].count(chr(10)) + 1} (chars {start}-{end})")
    

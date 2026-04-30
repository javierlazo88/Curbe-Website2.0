#!/usr/bin/env python3
import re
import os

# Read the file
with open("/Users/javierlazo/Desktop/Proyecto Curbe/client/src/components/sections/RespondStyleHomepage.tsx", "r") as f:
    content = f.read()

# Find all function definitions
pattern = r'function\s+(\w+)\s*\([^)]*\)\s*{'
matches = list(re.finditer(pattern, content))

print(f"Found {len(matches)} functions")

# Extract each function
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
    
    func_content = content[start:end]
    print(f"{i+1}. {func_name} (chars {start}-{end}, length {len(func_content)})")
    
    # Skip certain functions that should stay in main file
    if func_name in ['RespondStyleHomepage']:
        print(f"  -> SKIPPED (main function)")
        continue
        
    # Determine the target file
    # Check if it's a hook (starts with "use")
    if func_name.startswith('use'):
        print(f"  -> SKIPPED (already in hooks.ts)")
        continue
    
    # Check if file already exists
    target_file = f"/Users/javierlazo/Desktop/Proyecto Curbe/client/src/components/sections/respond-style/{func_name}.tsx"
    
    # Check if file exists
    if os.path.exists(target_file):
        print(f"  -> SKIPPED (file already exists)")
        continue
    
    # Write to file
    with open(target_file, "w") as out:
        out.write(func_content)
    print(f"  -> Extracted to {func_name}.tsx")
    
print("\nDone!")

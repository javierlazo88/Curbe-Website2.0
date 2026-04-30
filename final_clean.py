#!/usr/bin/env python3
import re

# Read the backup file
with open("/Users/javierlazo/Desktop/Proyecto Curbe/client/src/components/sections/RespondStyleHomepage.tsx.bak", "r") as f:
    content = f.read()

# Extract imports (lines 1-104 from original)
# Actually, let's extract everything before the first function definition that we extracted
# The imports are lines 1-104 (from the original file)

# Find the start of the first extracted function (AdCard at char 11867)
# We want to keep everything before that (imports + ad data arrays)

# Actually, let's be smarter. We'll extract:
# 1. All import statements (lines starting with "import ")
# 2. The ad data arrays (ADS_ROW_1, ADS_ROW_2, ADS_ROW_3)
# 3. The main RespondStyleHomepage function

# First, get all import lines
imports = re.findall(r'^import\s+.*$', content, re.MULTILINE)
imports_text = '\n'.join(imports)

# Find the start of the main function
main_pattern = r'function\s+RespondStyleHomepage\s*\([^)]*\)\s*{'
main_match = re.search(main_pattern, content)

if not main_match:
    print("Could not find main function!")
    exit(1)

main_start = main_match.start()
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
# 1. Everything before the main function (but remove the extracted functions)
before_main = content[:main_start]

# Remove all function definitions from before_main
func_pattern = r'function\s+\w+\s*\([^)]*\)\s*{'
func_matches = list(re.finditer(func_pattern, before_main))

print(f"\nFound {len(func_matches)} functions in before_main")

# Sort in reverse order to delete from end
func_matches_sorted = sorted(func_matches, key=lambda x: x.start(), reverse=True)

clean_before = before_main
for func_match in func_matches_sorted:
    func_name = func_match.group().split()[1].split('(')[0]
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
new_content = clean_before.rstrip() + "\n\n" + "import { AdCard } from \"./respond-style/AdCard\";\n" + \
              "import { FloatingReactions } from \"./respond-style/FloatingReactions\";\n" + \
              "import { useReveal, useSpotlight, useConveyorScale } from \"./respond-style/hooks\";\n" + \
              "import { AnimatedCounter } from \"./respond-style/AnimatedCounter\";\n" + \
              "import { Particles } from \"./respond-style/Particles\";\n" + \
              "import { AdShowcaseHero } from \"./respond-style/AdShowcaseHero\";\n" + \
              "import { HeroAurora } from \"./respond-style/HeroAurora\";\n" + \
              "import { AgentTheater } from \"./respond-style/AgentTheater\";\n" + \
              "import { StreamItem } from \"./respond-style/StreamItem\";\n" + \
              "import { ResultStat } from \"./respond-style/ResultStat\";\n" + \
              "import { ReallocationChart } from \"./respond-style/ReallocationChart\";\n" + \
              "import { CapabilitiesBento } from \"./respond-style/CapabilitiesBento\";\n" + \
              "import { CapabilityCard } from \"./respond-style/CapabilityCard\";\n" + \
              "import { BudgetBars } from \"./respond-style/BudgetBars\";\n" + \
              "import { AgentLoopArchitecture } from \"./respond-style/AgentLoopArchitecture\";\n" + \
              "import { AutonomyModes } from \"./respond-style/AutonomyModes\";\n" + \
              "import { MemoryMoat } from \"./respond-style/MemoryMoat\";\n" + \
              "import { KnowledgeGraph } from \"./respond-style/KnowledgeGraph\";\n" + \
              "import { MultiChannelTimeline } from \"./respond-style/MultiChannelTimeline\";\n" + \
              "import { StatsBar } from \"./respond-style/StatsBar\";\n" + \
              "import { Stat } from \"./respond-style/Stat\";\n" + \
              "import { ForWhom } from \"./respond-style/ForWhom\";\n" + \
              "import { SegmentCard } from \"./respond-style/SegmentCard\";\n" + \
              "import { Testimonials } from \"./respond-style/Testimonials\";\n" + \
              "import { HowToStart } from \"./respond-style/HowToStart\";\n" + \
              "import { FinalCTA } from \"./respond-style/FinalCTA\";\n" + \
              "import { PainPointSection } from \"./respond-style/PainPointSection\";\n" + \
              "import { WhyCurbeSection } from \"./respond-style/WhyCurbeSection\";\n" + \
              "import { PlatformsSection } from \"./respond-style/PlatformsSection\";\n" + \
              "import { TransformationSection } from \"./respond-style/TransformationSection\";\n\n" + \
              main_func.lstrip()

with open("/Users/javierlazo/Desktop/Proyecto Curbe/client/src/components/sections/RespondStyleHomepage.tsx", "w") as f:
    f.write(new_content)

print(f"\nDone! New file created.")
print(f"Original length: {len(content)} chars")
print(f"New length: {len(new_content)} chars")

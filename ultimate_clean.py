#!/usr/bin/env python3
import re

# Read the backup file
with open("/Users/javierlazo/Desktop/Proyecto Curbe/client/src/components/sections/RespondStyleHomepage.tsx.bak", "r") as f:
    content = f.read()

print(f"Original file: {len(content)} chars")

# Find the main RespondStyleHomepage function
main_pattern = r'function\s+RespondStyleHomepage\s*\([^)]*\)\s*{'
main_match = re.search(main_pattern, content)

if not main_match:
    print("Could not find RespondStyleHomepage function!")
    exit(1)

main_start = main_match.start()
print(f"Main function starts at character {main_start}")

# Find the end of the main function (matching braces)
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

# Now we want to keep:
# 1. Everything before main_start (imports, ad data arrays)
# 2. But REMOVE all function definitions from that part
# 3. The main function

before_main = content[:main_start]

# Find ALL function definitions in before_main (including those with generics)
# Better pattern that handles generics
pattern = r'function\s+\w+[^;{]*\([^;{]*\)\s*{'
matches = list(re.finditer(pattern, before_main))

print(f"\nFound {len(matches)} functions in before_main")

# Sort in reverse order to delete from end
matches_sorted = sorted(matches, key=lambda x: x.start(), reverse=True)

clean_before = before_main
for match in matches_sorted:
    func_name = re.search(r'\w+', match.group()).group()
    if func_name == 'RespondStyleHomepage':
        continue
    
    func_start = match.start()
    
    # Find end of function (matching braces)
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
new_content = clean_before.rstrip() + "\n\n" + main_func.rstrip()

# Add imports for the extracted components
imports_to_add = """
import { FloatingReactions } from "./respond-style/FloatingReactions";
import { AdData, AdCard } from "./respond-style/AdCard";
import { useReveal, useSpotlight, useConveyorScale } from "./respond-style/hooks";
import { AnimatedCounter } from "./respond-style/AnimatedCounter";
import { Particles } from "./respond-style/Particles";
import { AdShowcaseHero } from "./respond-style/AdShowcaseHero";
import { HeroAurora } from "./respond-style/HeroAurora";
import { AgentTheater } from "./respond-style/AgentTheater";
import { StreamItem } from "./respond-style/StreamItem";
import { ResultStat } from "./respond-style/ResultStat";
import { ReallocationChart } from "./respond-style/ReallocationChart";
import { CapabilitiesBento } from "./respond-style/CapabilitiesBento";
import { CapabilityCard } from "./respond-style/CapabilityCard";
import { BudgetBars } from "./respond-style/BudgetBars";
import { AgentLoopArchitecture } from "./respond-style/AgentLoopArchitecture";
import { AutonomyModes } from "./respond-style/AutonomyModes";
import { MemoryMoat } from "./respond-style/MemoryMoat";
import { KnowledgeGraph } from "./respond-style/KnowledgeGraph";
import { MultiChannelTimeline } from "./respond-style/MultiChannelTimeline";
import { StatsBar } from "./respond-style/StatsBar";
import { Stat } from "./respond-style/Stat";
import { ForWhom } from "./respond-style/ForWhom";
import { SegmentCard } from "./respond-style/SegmentCard";
import { Testimonials } from "./respond-style/Testimonials";
import { HowToStart } from "./respond-style/HowToStart";
import { FinalCTA } from "./respond-style/FinalCTA";
import { PainPointSection } from "./respond-style/PainPointSection";
import { WhyCurbeSection } from "./respond-style/WhyCurbeSection";
import { PlatformsSection } from "./respond-style/PlatformsSection";
import { TransformationSection } from "./respond-style/TransformationSection";
"""

# Find where to insert the imports (after the last import statement)
lines = new_content.split('\n')
last_import_idx = -1
for i, line in enumerate(lines):
    if line.startswith('import '):
        last_import_idx = i

if last_import_idx >= 0:
    lines.insert(last_import_idx + 1, imports_to_add.rstrip())
    new_content = '\n'.join(lines)
    print("Added imports")
else:
    print("Could not find where to insert imports")

# Write the final file
with open("/Users/javierlazo/Desktop/Proyecto Curbe/client/src/components/sections/RespondStyleHomepage.tsx", "w") as f:
    f.write(new_content)

print(f"\nDone! New file created.")
print(f"Original length: {len(content)} chars")
print(f"New length: {len(new_content)} chars")

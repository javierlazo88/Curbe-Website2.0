#!/usr/bin/env python3
import re

# Read backup
with open("/Users/javierlazo/Desktop/Proyecto Curbe/client/src/components/sections/RespondStyleHomepage.tsx.bak", "r") as f:
    content = f.read()

# Find position of "function RespondStyleHomepage"
match = re.search(r'function\s+RespondStyleHomepage\s*\(', content)
if not match:
    print("Main function not found!")
    exit(1)

main_start = match.start()
print(f"Main function starts at position {main_start}")

# Extract everything before main function
before_main = content[:main_start]

# Find all function definitions in before_main
func_pattern = r'function\s+\w+[^;{]*\([^)]*\)\s*{'
func_matches = list(re.finditer(func_pattern, before_main))

print(f"Found {len(func_matches)} functions before main")

# For each function, find its end (matching braces)
functions = []
for fm in func_matches:
    fname = re.search(r'function\s+(\w+)', fm.group()).group(1)
    start = fm.start()
    
    # Find matching brace
    brace_count = 0
    in_string = False
    string_char = None
    end = start
    
    for j in range(start, len(before_main)):
        char = before_main[j]
        if char in '"\'`':
            if not in_string:
                in_string = True
                string_char = char
            elif char == string_char and before_main[j-1] != '\\':
                in_string = False
        elif not in_string:
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    end = j + 1
                    break
    
    functions.append((fname, start, end))
    print(f"  {fname}: chars {start}-{end}")

# Now remove all these functions from before_main
# Sort by start position in reverse order
functions_sorted = sorted(functions, key=lambda x: x[1], reverse=True)

clean_before = before_main
for fname, start, end in functions_sorted:
    print(f"Removing {fname}...")
    clean_before = clean_before[:start] + clean_before[end:]

# Now get the main function
# Find end of main function
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

main_func = content[main_start:main_end]
print(f"Main function: chars {main_start}-{main_end}")

# Build new file
new_content = clean_before.rstrip() + "\n\n" + main_func

# Add imports for extracted components
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

# Find where to insert (after last import)
lines = new_content.split('\n')
last_import = -1
for i, line in enumerate(lines):
    if line.startswith('import '):
        last_import = i

if last_import >= 0:
    lines.insert(last_import + 1, imports_to_add.rstrip())
    new_content = '\n'.join(lines)
    print("Added imports")
else:
    print("Warning: Could not find where to insert imports")

# Write
with open("/Users/javierlazo/Desktop/Proyecto Curbe/client/src/components/sections/RespondStyleHomepage.tsx", "w") as f:
    f.write(new_content)

print(f"\nDone!")
print(f"Original length: {len(content)} chars")
print(f"New length: {len(new_content)} chars")

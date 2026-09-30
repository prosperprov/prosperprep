"""Shared helpers for G6 ELA/Science/History hand teach packs."""
from __future__ import annotations
import json
from pathlib import Path

FORBIDDEN = [
    "khan", "ckla", "ckhg", "cksci", "lgbt", "lesbian", "bisexual",
    "transgender", "nonbinary", "non-binary", "queer",
]

def Q(prompt, choices, correct_index, explanation):
    assert 0 <= correct_index < len(choices) == 4
    return {
        "prompt": prompt,
        "choices": choices,
        "correctIndex": correct_index,
        "explanation": explanation,
    }

def pack(objectives, description, warm, sections, guided, exit_ticket, stretch, questions, independent=None):
    """Build one hand pack. sections = list of markdown blocks under Teach."""
    first = objectives.strip().split("\n")[0].lstrip("• ").strip()
    ican = first[0].lower() + first[1:] if first else first
    teach = f"## Objective\n\n**I can** {ican}\n\n## Warm-up (2 minutes)\n\n{warm}\n\n## Teach\n\n"
    teach += "\n\n".join(sections)
    teach += "\n\n## Guided practice (we do)\n\n"
    for i, (q, a) in enumerate(guided, 1):
        teach += f"{i}. {q}  \n   **Answer:** {a}\n\n"
    out = {
        "objectives": objectives.strip(),
        "description": description.strip(),
        "teach_core": teach.strip(),
        "exit": f"## Exit ticket\n\n{exit_ticket.strip()}\n\n## Stretch (optional)\n\n{stretch.strip()}",
        "questions": questions,
    }
    if independent:
        out["independent"] = independent  # list of {q,a} — used when no practice bank
    return out

def mk(idea_title, idea, ex1_title, ex1, try_q, try_a, ex2_title, ex2, mistake, **kwargs):
    sections = [
        f"### {idea_title}\n\n{idea}",
        f"### Example 1 — {ex1_title}\n\n{ex1}",
        f"### Try this\n\n{try_q}\n\n**Check:** {try_a}",
        f"### Example 2 — {ex2_title}\n\n{ex2}",
        f"### Common mistake (this lesson only)\n\n{mistake}",
    ]
    return pack(sections=sections, **kwargs)

def save(path, content_dict):
    # content_dict keys: "unitN|Title"
    blob = json.dumps(content_dict, indent=2, ensure_ascii=False)
    low = blob.lower()
    for bad in FORBIDDEN:
        if bad in low:
            # find which key
            for k, v in content_dict.items():
                if bad in json.dumps(v).lower():
                    raise SystemExit(f"FORBIDDEN '{bad}' in {k}")
    Path(path).write_text(blob)
    print(f"wrote {path} lessons={len(content_dict)} bytes={len(blob)}")

def indep_md(items):
    lines = ["## Independent practice", "", "Complete each item. Show your thinking.", ""]
    for i, it in enumerate(items, 1):
        lines.append(f"{i}. {it['q']}")
    lines += ["", "### Answer key (try first)", ""]
    for i, it in enumerate(items, 1):
        lines.append(f"{i}. {it['a']}")
    return "\n".join(lines)

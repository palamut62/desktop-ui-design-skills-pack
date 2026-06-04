<h1 align="center">Desktop UI Design Skills Pack</h1>

<p align="center">
  Reusable desktop UI/UX design skills for Codex, Claude Code, and AI coding agents.
</p>

<p align="center">
  <a href="https://desktop-ui-design-skills.vercel.app">Live Demo</a> ·
  <a href="./skills">Skills</a> ·
  <a href="./ALL_SKILLS.md">All Skills</a> ·
  <a href="./AGENTS.md">Codex Instructions</a>
</p>

<p align="center">
  <img alt="Skills" src="https://img.shields.io/badge/skills-20-4f46e5">
  <img alt="Format" src="https://img.shields.io/badge/format-Markdown-111827">
  <img alt="Target" src="https://img.shields.io/badge/target-Desktop%20UI-2563eb">
  <img alt="Vercel" src="https://img.shields.io/badge/demo-Vercel-000000">
  <img alt="Codex" src="https://img.shields.io/badge/Codex-ready-10b981">
  <img alt="Claude Code" src="https://img.shields.io/badge/Claude%20Code-ready-f59e0b">
  <img alt="License" src="https://img.shields.io/badge/license-TODO-lightgrey">
</p>

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Skill Catalog](#skill-catalog)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Configuration](#configuration)
- [Testing](#testing)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Security](#security)
- [FAQ](#faq)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Overview

Desktop UI Design Skills Pack is a Markdown-based design system library for AI coding tools. Each skill describes a complete desktop UI style: visual identity, layout anatomy, color tokens, typography, components, interaction states, acceptance criteria, and a production-oriented generation prompt.

The pack currently includes **20 skills**. It covers all 19 design styles from the local design playground source and keeps one additional modern enterprise WinForms skill for practical VB.NET/C# desktop applications.

Live playground: [https://desktop-ui-design-skills.vercel.app](https://desktop-ui-design-skills.vercel.app)

Target users:

- Developers using Codex, Claude Code, Cursor, OpenCode, or similar AI coding agents.
- Builders creating Electron, Tauri, WinForms, WPF, WinUI, Avalonia, PyQt, or web-based desktop tools.
- Designers who want repeatable UI style rules that can be handed to an AI implementation agent.
- Teams that need consistent desktop UI generation across multiple internal apps.

## Features

- **20 reusable UI skills** in standalone `SKILL.md` files.
- **Agent-ready documentation** for Codex and Claude Code workflows.
- **Platform-aware token guidance** for CSS, WinForms, WPF, WinUI, Avalonia, and PyQt/PySide.
- **Interaction-state coverage** for default, hover, active, focus, disabled, loading, empty, and error states.
- **Desktop-first patterns** for sidebars, command palettes, tables, chat panels, tool windows, workspaces, dashboards, and WinForms.
- **Merged reference file** in `ALL_SKILLS.md` for tools that prefer a single document.
- **Codex project instructions** in `AGENTS.md`.

## Skill Catalog

| # | Skill | Best For |
|---:|---|---|
| 01 | [Glassmorphism Dashboard](./skills/01-glassmorphism-dashboard/SKILL.md) | Premium dashboards, AI tools, analytics panels |
| 02 | [Dark Developer UI](./skills/02-dark-developer-ui/SKILL.md) | Code tools, terminals, repo managers |
| 03 | [Minimal Sidebar UI](./skills/03-minimal-sidebar-ui/SKILL.md) | CRUD apps, admin panels, simple business tools |
| 04 | [Command Palette UI](./skills/04-command-palette-ui/SKILL.md) | Launchers, rule managers, keyboard-first workflows |
| 05 | [Card Dashboard UI](./skills/05-card-dashboard-ui/SKILL.md) | KPI cards, budget apps, subscription tracking |
| 06 | [Neumorphism UI](./skills/06-neumorphism-ui/SKILL.md) | Personal tools, soft controls, low-risk panels |
| 07 | [Fluent Windows 11 UI](./skills/07-fluent-windows-11-ui/SKILL.md) | Windows-native WPF, WinUI, Electron apps |
| 08 | [Split Panel Workspace](./skills/08-split-panel-workspace/SKILL.md) | Notes, markdown editors, file/detail workflows |
| 09 | [Kanban Board UI](./skills/09-kanban-board-ui/SKILL.md) | Task boards, project tracking, agent workflows |
| 10 | [Terminal + GUI Hybrid](./skills/10-terminal-gui-hybrid/SKILL.md) | CLI wrappers, installers, log monitors |
| 11 | [Windows Forms App UI](./skills/11-windows-forms-app-ui/SKILL.md) | Modern VB.NET/C# WinForms business apps |
| 12 | [Floating Tool Window](./skills/12-floating-tool-window/SKILL.md) | OCR capture, clipboard tools, quick launchers |
| 13 | [Workspace UI](./skills/13-workspace-ui/SKILL.md) | Codex/Claude/OpenCode-style workbenches |
| 14 | [Settings-First UI](./skills/14-settings-first-ui/SKILL.md) | API keys, model settings, integration panels |
| 15 | [Data Table Admin UI](./skills/15-data-table-admin-ui/SKILL.md) | Filterable tables, bulk actions, admin lists |
| 16 | [AI Chat + Tool Panel UI](./skills/16-ai-chat-tool-panel-ui/SKILL.md) | AI assistants, slide generators, export tools |
| 17 | [Classic Windows Form UI](./skills/17-classic-windows-form-ui/SKILL.md) | Retro Windows 95/98/2000 style tools |
| 18 | [Cyberpunk HUD UI](./skills/18-cyberpunk-hud-ui/SKILL.md) | Sci-fi panels, game consoles, security HUDs |
| 19 | [Neo-Brutalism UI](./skills/19-neo-brutalism-ui/SKILL.md) | Bold SaaS, creator tools, task panels |
| 20 | [Claymorphism UI](./skills/20-claymorphism-ui/SKILL.md) | Friendly personal assistants, playful creative tools |

## Tech Stack

This repository is intentionally lightweight.

- **Markdown** for portable skill definitions.
- **Codex `AGENTS.md`** for repository-level AI instructions.
- **No build step** required.
- **No runtime dependencies** required.

The skills can guide implementations in:

- Electron
- Tauri
- Windows Forms
- WPF
- WinUI
- Avalonia
- PyQt/PySide
- Web-based desktop shells

## Architecture

The repository is organized as a skill library:

```text
AI coding tool
  reads AGENTS.md
  selects a style from skills/
  applies visual identity, layout, tokens, components, states
  generates or edits the target desktop UI implementation
```

Each skill is self-contained and follows the same broad structure:

- Metadata frontmatter
- Purpose and usage guidance
- Visual identity
- Palette and typography
- Layout system
- Component list
- Platform token examples
- Interaction rules
- Do and do-not rules
- AI generation prompt
- Acceptance criteria

## Project Structure

```text
.
├── AGENTS.md
├── ALL_SKILLS.md
├── README.md
└── skills/
    ├── 01-glassmorphism-dashboard/
    ├── 02-dark-developer-ui/
    ├── ...
    └── 20-claymorphism-ui/
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/palamut62/desktop-ui-design-skills-pack.git
cd desktop-ui-design-skills-pack
```

Pick a skill:

```bash
ls skills
```

Read a skill:

```bash
cat skills/14-settings-first-ui/SKILL.md
```

For tools that prefer one large context file, use:

```bash
cat ALL_SKILLS.md
```

## Usage

### Codex

Copy this repository into your project or reference the selected skill in your prompt:

```text
Use skills/15-data-table-admin-ui/SKILL.md to design this desktop admin table.
Follow its palette, layout, component states, accessibility rules, and acceptance criteria.
```

Codex can also read `AGENTS.md` to understand the routing rules for this skill pack.

### Claude Code

Point Claude Code at a specific skill:

```text
Read skills/16-ai-chat-tool-panel-ui/SKILL.md first.
Then implement the AI chat + tool panel screen using the existing app stack.
```

### One-file Context

If your tool accepts only one documentation file, provide:

```text
ALL_SKILLS.md
```

## Configuration

No environment variables are required.

Recommended integration options:

- Add the whole repository as a documentation folder in your AI coding workspace.
- Copy only the relevant `skills/<style>/SKILL.md` file into a target app.
- Add `AGENTS.md` to a Codex project when you want automatic style-routing instructions.

## Testing

This is a documentation repository, so there is no application test suite.

Useful validation commands:

```bash
# Count skill folders
find skills -maxdepth 1 -mindepth 1 -type d | wc -l

# Confirm every skill has a SKILL.md
find skills -maxdepth 2 -name SKILL.md | sort

# Search for a style
grep -R "Data Table Admin" -n skills README.md ALL_SKILLS.md
```

On Windows PowerShell:

```powershell
(Get-ChildItem skills -Directory | Measure-Object).Count
Get-ChildItem skills -Directory | ForEach-Object { Test-Path (Join-Path $_.FullName 'SKILL.md') }
```

## Deployment

There is no app deployment target. Publish the repository itself as the distribution artifact.

Recommended release flow:

1. Update or add skill files.
2. Regenerate `ALL_SKILLS.md` from the `skills/` directory.
3. Update `README.md` when the catalog changes.
4. Tag a release when the skill set is stable.

## Roadmap

- Add visual preview screenshots for each style.
- Add a local HTML playground inside the repository.
- Add platform-specific examples for WinForms, WPF, Electron, and PyQt.
- Add a small validation script for frontmatter and required sections.
- Add LICENSE once the distribution model is decided.

## Contributing

Contributions should keep each skill practical for real AI-assisted implementation.

When adding a new skill:

1. Create `skills/<number>-<style-name>/SKILL.md`.
2. Include frontmatter with `name` and `description`.
3. Cover layout, palette, typography, components, states, do/do-not rules, prompt, and acceptance criteria.
4. Update `README.md`.
5. Regenerate `ALL_SKILLS.md`.

## Security

This repository contains documentation only. Do not commit:

- API keys
- customer data
- screenshots with secrets
- private project prompts
- proprietary design files without permission

If a skill references sensitive settings, it should describe safe UI handling such as masking, copy controls, validation, and destructive confirmation.

## FAQ

### Is this a UI component library?

No. It is a Markdown skill library for AI coding agents. The skills guide UI generation in your chosen stack.

### Does it replace a design system?

No. It complements a design system by giving AI tools concrete style rules, layout expectations, and acceptance criteria.

### Why are there both modern and classic Windows form skills?

`Windows Forms App UI` is for modern enterprise WinForms apps. `Classic Windows Form UI` is for intentional retro Windows 95/98/2000 aesthetics.

### Can I use these skills with non-desktop apps?

Yes, but the guidance is desktop-first. Adapt spacing, navigation, and density carefully for mobile or web-only products.

## License

TODO: Add a license file before publishing this repository as a public reusable package.

## Acknowledgments

Built for AI-assisted desktop UI generation workflows across Codex, Claude Code, and similar coding agents.

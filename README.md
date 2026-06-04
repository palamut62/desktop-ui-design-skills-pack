<h1 align="center">Desktop UI Design Skills Pack</h1>

<p align="center">
  19 installable desktop UI/UX design skills for Codex, Claude Code, Cursor, OpenCode, and AI coding agents.
</p>

<p align="center">
  <a href="https://desktop-ui-design-skills.vercel.app">Live Demo</a> ·
  <a href="./skills">Skills</a> ·
  <a href="./ALL_SKILLS.md">All Skills</a> ·
  <a href="./AGENTS.md">Codex Instructions</a>
</p>

<p align="center">
  <img alt="Skills" src="https://img.shields.io/badge/skills-19-4f46e5">
  <img alt="Installable" src="https://img.shields.io/badge/installable-yes-10b981">
  <img alt="Format" src="https://img.shields.io/badge/format-Markdown-111827">
  <img alt="Target" src="https://img.shields.io/badge/target-Desktop%20UI-2563eb">
  <img alt="Vercel" src="https://img.shields.io/badge/demo-Vercel-000000">
  <img alt="Claude Code" src="https://img.shields.io/badge/Claude%20Code-plugin-f59e0b">
  <img alt="Codex" src="https://img.shields.io/badge/Codex-plugin-10b981">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-lightgrey">
</p>

## Table of Contents

- [Overview](#overview)
- [Quick Install](#quick-install)
- [Install Targets](#install-targets)
- [Skill Catalog](#skill-catalog)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## Overview

Desktop UI Design Skills Pack is an installable Markdown skill library for AI coding tools. Each skill describes one complete desktop UI style: visual identity, layout anatomy, palette, typography, platform tokens, components, interaction states, implementation prompt, and acceptance criteria.

Live playground: [https://desktop-ui-design-skills.vercel.app](https://desktop-ui-design-skills.vercel.app)

This repository now follows an ECC-style distribution model:

- Plugin manifests for Claude Code and Codex.
- `package.json` with executable installer bins.
- `install.sh` and `install.ps1` wrapper scripts.
- A Node-based installer that copies selected skills into the right agent folder.
- A machine-readable `manifests/skills.json` catalog.
- A single-file `ALL_SKILLS.md` bundle for context-only tools.

## Quick Install

### Claude Code Plugin

If your Claude Code build supports external plugin marketplaces, add this repository and install the plugin:

```text
/plugin marketplace add https://github.com/palamut62/desktop-ui-design-skills-pack
/plugin install desktop-ui-design-skills@desktop-ui-design-skills
```

### npx from GitHub

Use this when you want a one-command install without cloning first:

```bash
npx github:palamut62/desktop-ui-design-skills-pack --target claude
```

Install for Codex:

```bash
npx github:palamut62/desktop-ui-design-skills-pack --target codex
```

Install only selected skills:

```bash
npx github:palamut62/desktop-ui-design-skills-pack --target codex --skills 04,14,15
```

### Clone + Install Script

Linux/macOS/Git Bash:

```bash
git clone https://github.com/palamut62/desktop-ui-design-skills-pack.git
cd desktop-ui-design-skills-pack
./install.sh --target claude
```

Windows PowerShell:

```powershell
git clone https://github.com/palamut62/desktop-ui-design-skills-pack.git
cd desktop-ui-design-skills-pack
.\install.ps1 --target codex
```

Dry run before writing files:

```bash
node scripts/install-apply.js --target claude --dry-run
```

List available skills:

```bash
node scripts/install-apply.js --list
```

## Install Targets

| Target | Destination |
|---|---|
| `claude` | `~/.claude/skills/desktop-ui-design-skills` |
| `claude-project` | `./.claude/skills/desktop-ui-design-skills` |
| `codex` | `~/.codex/skills/desktop-ui-design-skills` |
| `codex-project` | `./.codex/skills/desktop-ui-design-skills` |
| `cursor` | `./.cursor/skills/desktop-ui-design-skills` |
| `opencode` | `~/.opencode/skills/desktop-ui-design-skills` |

Installer options:

```text
--target <target>   Install destination.
--skills <ids>      Comma-separated or space-separated skill numbers/folder names.
--dry-run           Print plan without copying.
--json              Output machine-readable JSON.
--list              List available skills.
--help              Show help.
```

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
| 11 | [Floating Tool Window](./skills/11-floating-tool-window/SKILL.md) | OCR capture, clipboard tools, quick launchers |
| 12 | [Workspace UI](./skills/12-workspace-ui/SKILL.md) | Codex/Claude/OpenCode-style workbenches |
| 13 | [Settings-First UI](./skills/13-settings-first-ui/SKILL.md) | API keys, model settings, integration panels |
| 14 | [Data Table Admin UI](./skills/14-data-table-admin-ui/SKILL.md) | Filterable tables, bulk actions, admin lists |
| 15 | [AI Chat + Tool Panel UI](./skills/15-ai-chat-tool-panel-ui/SKILL.md) | AI assistants, slide generators, export tools |
| 16 | [Classic Windows Form UI](./skills/16-classic-windows-form-ui/SKILL.md) | Retro Windows 95/98/2000 style tools |
| 17 | [Cyberpunk HUD UI](./skills/17-cyberpunk-hud-ui/SKILL.md) | Sci-fi panels, game consoles, security HUDs |
| 18 | [Neo-Brutalism UI](./skills/18-neo-brutalism-ui/SKILL.md) | Bold SaaS, creator tools, task panels |
| 19 | [Claymorphism UI](./skills/19-claymorphism-ui/SKILL.md) | Friendly personal assistants, playful creative tools |

## Usage

### Direct Prompt Usage

```text
Read skills/14-data-table-admin-ui/SKILL.md first.
Then implement the admin table screen using that style's layout, tokens, component states, accessibility rules, and acceptance criteria.
```

### Codex Project Usage

Use `AGENTS.md` as the project-level instruction file. It tells Codex how to route design requests to the correct skill.

### One-file Context

If your tool accepts only one context file, use:

```bash
cat ALL_SKILLS.md
```

## Project Structure

```text
.
├── .claude-plugin/plugin.json
├── .codex-plugin/plugin.json
├── AGENTS.md
├── ALL_SKILLS.md
├── LICENSE
├── README.md
├── VERSION
├── index.html
├── install.ps1
├── install.sh
├── manifests/
│   └── skills.json
├── scripts/
│   ├── install-apply.js
│   └── validate.js
└── skills/
    ├── 01-glassmorphism-dashboard/
    ├── ...
    └── 19-claymorphism-ui/
```

## Development

Install dependencies are not required. The scripts use Node.js built-ins only.

Run validation:

```bash
npm test
```

Regenerate `ALL_SKILLS.md` after skill changes:

```powershell
$utf8 = New-Object System.Text.UTF8Encoding($false)
$dirs = Get-ChildItem skills -Directory | Sort-Object Name
$parts = foreach ($dir in $dirs) { [System.IO.File]::ReadAllText((Join-Path $dir.FullName 'SKILL.md'), $utf8) }
[System.IO.File]::WriteAllText((Join-Path (Get-Location) 'ALL_SKILLS.md'), ($parts -join "`r`n`r`n"), $utf8)
```

## Testing

Useful checks:

```bash
npm test
node scripts/install-apply.js --list
node scripts/install-apply.js --target claude --dry-run
node scripts/install-apply.js --target codex --skills 04,14,15 --dry-run
.\install.ps1 --target codex-project --skills "01,19" --dry-run
```

## Deployment

The HTML playground is deployed on Vercel:

[https://desktop-ui-design-skills.vercel.app](https://desktop-ui-design-skills.vercel.app)

Production deploy command:

```bash
npx vercel --prod --yes
```

## Roadmap

- Publish the package to npm as `desktop-ui-design-skills-pack`.
- Add preview screenshots for all 19 styles.
- Add install/uninstall support.
- Add project templates for Electron, WinForms, WPF, and PyQt.
- Add CI validation for skill frontmatter and manifest consistency.

## Contributing

When adding or changing a skill:

1. Keep the skill practical for real AI-assisted implementation.
2. Include frontmatter with `name` and `description`.
3. Cover layout, palette, typography, components, states, do/do-not rules, prompt, and acceptance criteria.
4. Update `manifests/skills.json`.
5. Regenerate `ALL_SKILLS.md`.
6. Run `npm test`.

## Security

This repository contains documentation, manifests, and installer scripts only. Do not commit:

- API keys
- customer data
- screenshots with secrets
- private project prompts
- proprietary design files without permission

The installer copies local Markdown skill folders into agent skill directories. It does not execute downloaded skill content.

## License

MIT. See [LICENSE](./LICENSE).

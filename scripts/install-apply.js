#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const PACKAGE_ID = "desktop-ui-design-skills";
const PROJECT_ROOT = path.resolve(__dirname, "..");
const SKILLS_DIR = path.join(PROJECT_ROOT, "skills");

const TARGETS = {
  claude: {
    label: "Claude Code user install",
    root: () => path.join(os.homedir(), ".claude", "skills", PACKAGE_ID)
  },
  "claude-project": {
    label: "Claude Code project install",
    root: () => path.join(process.cwd(), ".claude", "skills", PACKAGE_ID)
  },
  codex: {
    label: "Codex user install",
    root: () => path.join(os.homedir(), ".codex", "skills", PACKAGE_ID)
  },
  "codex-project": {
    label: "Codex project install",
    root: () => path.join(process.cwd(), ".codex", "skills", PACKAGE_ID)
  },
  cursor: {
    label: "Cursor project install",
    root: () => path.join(process.cwd(), ".cursor", "skills", PACKAGE_ID)
  },
  opencode: {
    label: "OpenCode user install",
    root: () => path.join(os.homedir(), ".opencode", "skills", PACKAGE_ID)
  }
};

function usage() {
  return `
Desktop UI Design Skills installer

Usage:
  desktop-ui-design-skills --target <target> [--skills <ids>] [--dry-run] [--json]
  desktop-ui-design-skills --list

Targets:
  claude          Install into ~/.claude/skills/desktop-ui-design-skills
  claude-project  Install into ./.claude/skills/desktop-ui-design-skills
  codex           Install into ~/.codex/skills/desktop-ui-design-skills
  codex-project   Install into ./.codex/skills/desktop-ui-design-skills
  cursor          Install into ./.cursor/skills/desktop-ui-design-skills
  opencode        Install into ~/.opencode/skills/desktop-ui-design-skills

Options:
  --skills <ids>  Comma-separated skill folder IDs or numbers.
                  Examples: 01-glassmorphism-dashboard,14-data-table-admin-ui
                  Examples: 1,14,16
  --dry-run       Print the install plan without copying files.
  --json          Emit machine-readable JSON.
  --list          List available skills.
  --help          Show this help.

Examples:
  desktop-ui-design-skills --target claude
  desktop-ui-design-skills --target codex --skills 4,15,16
  desktop-ui-design-skills --target claude-project --dry-run
`.trim();
}

function parseArgs(argv) {
  const args = argv.slice(2);
  const options = {
    target: "claude",
    skills: null,
    dryRun: false,
    json: false,
    list: false,
    help: false
  };

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "--target") {
      options.target = args[++i];
    } else if (arg === "--skills") {
      options.skills = args[++i];
    } else if (arg === "--profile") {
      const profile = args[++i];
      if (profile && profile !== "all") {
        throw new Error(`Unsupported profile "${profile}". Only "all" is available.`);
      }
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--json") {
      options.json = true;
    } else if (arg === "--list") {
      options.list = true;
    } else if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else {
      throw new Error(`Unknown option: ${arg}`);
    }
  }

  return options;
}

function listSkills() {
  return fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function normalizeSkillId(input, available) {
  const trimmed = input.trim();
  if (!trimmed) return null;
  if (available.includes(trimmed)) return trimmed;

  const numeric = trimmed.padStart(2, "0");
  const match = available.find((skill) => skill.startsWith(`${numeric}-`));
  if (match) return match;

  throw new Error(`Unknown skill "${input}". Run --list to see available skills.`);
}

function selectSkills(skillArg, available) {
  if (!skillArg) return available;
  const requested = skillArg.split(",").map((item) => normalizeSkillId(item, available)).filter(Boolean);
  return [...new Set(requested)];
}

function copyDirectory(source, destination) {
  fs.rmSync(destination, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.cpSync(source, destination, { recursive: true });
}

function createPlan(options) {
  if (!TARGETS[options.target]) {
    throw new Error(`Unsupported target "${options.target}". Valid targets: ${Object.keys(TARGETS).join(", ")}`);
  }

  const available = listSkills();
  const selected = selectSkills(options.skills, available);
  const installRoot = TARGETS[options.target].root();
  const operations = selected.map((skill) => ({
    skill,
    source: path.join(SKILLS_DIR, skill),
    destination: path.join(installRoot, skill)
  }));

  return {
    packageId: PACKAGE_ID,
    target: options.target,
    targetLabel: TARGETS[options.target].label,
    installRoot,
    selectedSkills: selected,
    operations,
    installStatePath: path.join(installRoot, "install-state.json")
  };
}

function applyPlan(plan) {
  for (const operation of plan.operations) {
    copyDirectory(operation.source, operation.destination);
  }

  fs.mkdirSync(plan.installRoot, { recursive: true });
  fs.writeFileSync(plan.installStatePath, JSON.stringify({
    packageId: plan.packageId,
    target: plan.target,
    installedAt: new Date().toISOString(),
    skills: plan.selectedSkills
  }, null, 2));

  return plan;
}

function printPlan(plan, dryRun) {
  console.log(`${dryRun ? "Dry-run install plan" : "Applying install plan"}:\n`);
  console.log(`Package: ${plan.packageId}`);
  console.log(`Target: ${plan.target} (${plan.targetLabel})`);
  console.log(`Install root: ${plan.installRoot}`);
  console.log(`Skills: ${plan.selectedSkills.length}`);
  console.log("\nFile operations:");
  for (const operation of plan.operations) {
    console.log(`- ${operation.skill} -> ${operation.destination}`);
  }
  if (!dryRun) {
    console.log(`\nDone. Install-state written to ${plan.installStatePath}`);
  }
}

function main() {
  try {
    const options = parseArgs(process.argv);
    if (options.help) {
      console.log(usage());
      return;
    }

    if (options.list) {
      const skills = listSkills();
      if (options.json) {
        console.log(JSON.stringify({ skills }, null, 2));
      } else {
        console.log(skills.join("\n"));
      }
      return;
    }

    const plan = createPlan(options);
    if (options.dryRun) {
      if (options.json) {
        console.log(JSON.stringify({ dryRun: true, plan }, null, 2));
      } else {
        printPlan(plan, true);
      }
      return;
    }

    const result = applyPlan(plan);
    if (options.json) {
      console.log(JSON.stringify({ dryRun: false, result }, null, 2));
    } else {
      printPlan(result, false);
    }
  } catch (error) {
    process.stderr.write(`Error: ${error.message}\n\n${usage()}\n`);
    process.exit(1);
  }
}

main();

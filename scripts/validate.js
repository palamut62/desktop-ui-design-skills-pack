#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const skillsDir = path.join(root, "skills");
const manifestPath = path.join(root, "manifests", "skills.json");

function fail(message) {
  console.error(`validate: ${message}`);
  process.exitCode = 1;
}

const skills = fs.readdirSync(skillsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

if (skills.length !== 19) {
  fail(`expected 19 skills, found ${skills.length}`);
}

for (const skill of skills) {
  const file = path.join(skillsDir, skill, "SKILL.md");
  if (!fs.existsSync(file)) {
    fail(`missing ${file}`);
    continue;
  }

  const text = fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "");
  if (!/^---\r?\n[\s\S]*?\r?\n---/.test(text)) {
    fail(`${skill} is missing frontmatter`);
  }
  if (!/^name:\s*\S+/m.test(text)) {
    fail(`${skill} is missing frontmatter name`);
  }
  if (!/^description:\s+.+/m.test(text)) {
    fail(`${skill} is missing frontmatter description`);
  }
}

if (!fs.existsSync(manifestPath)) {
  fail("missing manifests/skills.json");
} else {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const manifestIds = manifest.skills.map((skill) => skill.id).sort();
  if (manifestIds.length !== skills.length) {
    fail(`manifest has ${manifestIds.length} skills, directory has ${skills.length}`);
  }
  for (const skill of skills) {
    if (!manifestIds.includes(skill)) {
      fail(`manifest missing ${skill}`);
    }
  }
}

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log(`validate: ok (${skills.length} skills)`);

function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (license === 'None') return '';
  return `\n* [License](#license)\n`;
}

function renderLicenseSection(license) {
  if (license === 'None') return '';
  return `## 📜 License\nThis project is licensed under the **${license}** license.`;
}

function generateMarkdown(data) {
  return `# 🏷️ ${data.title} 🏷️
${renderLicenseBadge(data.license)}

## 📚 Description
${data.description}

## 📖 Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## 💽 Installation
\`\`\`bash
${data.installation}
\`\`\`

## 🎯 Usage
${data.usage}

${renderLicenseSection(data.license)}

## 👥 Contributing
${data.contributing}

## 🧪 Tests
To run tests, use the following command:

\`\`\`bash
${data.tests}
\`\`\`

## ❓ Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
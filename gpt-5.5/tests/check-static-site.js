const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const expectedFiles = [
  'index.html',
  'dark.html',
  'light.html',
  'oriental.html',
  'README.md',
  'docs/plans/2026-06-06-htlabs-enterprise-site-design.md',
  'docs/plans/2026-06-06-htlabs-enterprise-site-implementation.md',
];

const requiredText = {
  'index.html': ['上海宏途数创科技有限公司', '深色高级科技风', '浅色极简商务风', '东方留白高端风'],
  'dark.html': ['上海宏途数创科技有限公司', '深色高级科技风', '数字化咨询', '智能应用'],
  'light.html': ['上海宏途数创科技有限公司', '浅色极简商务风', '数据治理', '业务系统'],
  'oriental.html': ['上海宏途数创科技有限公司', '东方留白高端风', '长期主义', '数创'],
};

for (const file of expectedFiles) {
  const filePath = path.join(root, file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

for (const [file, snippets] of Object.entries(requiredText)) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  for (const snippet of snippets) {
    if (!html.includes(snippet)) {
      throw new Error(`${file} does not include required text: ${snippet}`);
    }
  }
}

console.log('Static site files verified.');

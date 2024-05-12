const config = {
  requireModule: ['ts-node/register', 'tsconfig-paths/register'],
  require: ['./steps/**/*.ts', 'app/pages/**/*.page.ts', 'support/**/*.ts'],
  path: ['./features/**/*.feature'],
  format: [
    'json:reports/cucumber-report.json',
    'html:reports/report.html',
    'summary',
    'progress-bar',
  ],
  formatOptions: { snippetInterface: 'async-await' },
}
export default config

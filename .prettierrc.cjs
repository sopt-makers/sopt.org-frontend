module.exports = {
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  bracketSpacing: true,
  endOfLine: 'auto',
  useTabs: false,
  importOrderSortSpecifiers: true,
  importOrderSeparation: false,
  importOrder: ['next', 'react', '^@src/(.*)$', '^(?!react)\\w+$', '^[./]'],
};

module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier'
  ],
  defaultSeverity: 'warning',
  plugins: ['stylelint-order'],
  rules: {
    'no-empty-source': null,
    'selector-class-pattern': null,
    'value-keyword-case': null,
    'font-family-no-missing-generic-family-keyword': null,
    'number-leading-zero': null, // 小数不带0
    'color-function-notation': null,
    'alpha-value-notation': null,
    'no-descending-specificity': null
  }
}

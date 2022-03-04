module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
    require.resolve('./_rules/css.js')
  ],
  defaultSeverity: 'warning',
  plugins: ['stylelint-order']
}

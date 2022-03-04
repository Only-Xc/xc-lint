module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
    'stylelint-config-html/vue', // 放在最后一位
    require.resolve('./_rules/css.js'),
    require.resolve('./_rules/vue.js')
  ],
  defaultSeverity: 'warning',
  plugins: ['stylelint-order']
}

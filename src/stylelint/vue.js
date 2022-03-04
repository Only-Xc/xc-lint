module.exports = {
  extends: [
    /**
     * 继承基础配置
     */
    require.resolve('./common.js'),
    /**
     * vue 文件解析器
     */
    'stylelint-config-html/vue'
  ],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global']
          }
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
          }
        ]
      }
    }
  ]
}

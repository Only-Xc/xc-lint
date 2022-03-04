module.exports = {
  extends: [
    /**
     * 继承基础配置
     */
    require.resolve('./common.js'),
    /**
     * 继承 eslint-plugin-vue 插件的规则
     * @link https://eslint.vuejs.org/user-guide/#installation
     */
    'plugin:vue/vue3-recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}

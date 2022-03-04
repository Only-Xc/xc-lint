module.exports = {
  extends: [
    /**
     * 继承基础配置
     */
    require.resolve('./_rules/env.js'),
    /**
     * 继承 eslint-plugin-vue 插件的规则
     * @link https://eslint.vuejs.org/user-guide/#installation
     */
    'plugin:vue/vue3-recommended',
    /**
     * 继承 eslint-plugin-prettier 插件的规则
     * @link https://github.com/prettier/eslint-plugin-prettier
     */
    'plugin:prettier/recommended'
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

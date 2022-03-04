module.exports = {
  extends: [
    /**
     * 继承基础配置
     */
    require.resolve('./_rules/env.js'),
    /**
     * 继承 eslint-plugin-prettier 插件的规则
     * @link https://github.com/prettier/eslint-plugin-prettier
     */
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    sourceType: 'module'
  }
}

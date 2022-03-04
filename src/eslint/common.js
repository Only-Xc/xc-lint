module.exports = {
  root: true,
  env: { browser: true, node: true, es6: true },
  extends: [
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

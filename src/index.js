const path = require('path')
const requireAll = require('require-all')

const eslint = requireAll({
  dirname: path.resolve(__dirname, 'eslint')
})

const stylelint = requireAll({
  dirname: path.resolve(__dirname, 'stylelint')
})

const prettier = requireAll({
  dirname: path.resolve(__dirname, 'prettier')
})

const commitlint = requireAll({
  dirname: path.resolve(__dirname, 'commitlint')
})

function getConfig(configs, rule) {
  if (!configs[rule]) {
    throw new Error(`Rule ${rule} 暂不支持！`)
  }

  return configs[rule]
}

exports.getEslintConfig = function (rule) {
  return getConfig(eslint, rule)
}

exports.getStylelintConfig = function (rule) {
  return getConfig(stylelint, rule)
}

exports.getPrettierConfig = function (rule) {
  return getConfig(prettier, rule)
}

exports.getCommitlintConfig = function (rule) {
  return getConfig(commitlint, rule)
}

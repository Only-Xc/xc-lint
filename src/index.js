const path = require('path')
const requireAll = require('require-all')

function getAllConfig(dir) {
  return requireAll({
    dirname: path.resolve(__dirname, dir),
    excludeDirs: /^[_*]/
  })
}

const eslint = getAllConfig('./eslint')
const stylelint = getAllConfig('./stylelint')
const prettier = getAllConfig('./prettier')
const commitlint = getAllConfig('./commitlint')

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

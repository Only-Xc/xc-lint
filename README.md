# XC-Lint

将本人常用的 lint 规范进行封装，方便其他项目中的使用。

## 前期准备

`pnpm`解决了幽灵依赖问题，但是此包需要用到幽灵依赖才能使Lint正常生效，所以需要在安装项目根目录创建 `.npmrc` 文件，添加如下内容：

```
# Eslint - common
public-hoist-pattern[]=eslint-config-prettier
public-hoist-pattern[]=eslint-plugin-prettier

# Esint - vue3
public-hoist-pattern[]=eslint-plugin-vue
public-hoist-pattern[]=vue-eslint-parser

# Stylelint - common
public-hoist-pattern[]=stylelint-config-standard
public-hoist-pattern[]=stylelint-config-rational-order
public-hoist-pattern[]=stylelint-config-prettier
public-hoist-pattern[]=stylelint-order

# Stylelint - vue
public-hoist-pattern[]=stylelint-config-html
public-hoist-pattern[]=postcss
public-hoist-pattern[]=postcss-html
public-hoist-pattern[]=postcss-less

# CommitLint - common
public-hoist-pattern[]=@commitlint/config-conventional
```

## 安装

```bash
pnpm add eslint prettier stylelint @commitlint/cli -D
pnpm add https://github.com/Only-Xc/xc-lint.git
```

## 使用

### Eslint

在项目根目录创建 `.eslintrc.js` 文件，添加如下内容：

```javascript
const { getEslintConfig } = require("xc-lint");

module.exports = getEslintConfig('vue');
```

### Stylelint

在项目根目录创建 `.stylelintrc.js` 文件，添加如下内容：

```javascript
const { getStylelintConfig } = require("xc-lint");

module.exports = getStylelintConfig('vue');
```

### Prettier

在项目根目录创建 `.prettierrc.js` 文件，添加如下内容：

```javascript
const { getPrettierConfig } = require("xc-lint");

module.exports = getPrettierConfig('common');
```

### Commitlint

在项目根目录创建 `.commitlintrc.js` 文件，添加如下内容：

```javascript
const { getCommitlintConfig } = require("xc-lint");

module.exports = getCommitlintConfig('common');
```
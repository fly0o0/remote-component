// http://eslint.org/docs/user-guide/configuring
// 0或'off'：关闭规则。
// 1或'warn'：打开规则，并且作为一个警告（并不会导致检查不通过）。
// 2或'error'：打开规则，并且作为一个错误 (退出码为1，检查不通过)。
module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    // https://eslint.vuejs.org/user-guide/#usage 修复bug
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  // 规则
  'rules': {
    "prefer-const": [
      "error",
      {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
      }
    ],
    'no-debugger': 'warn',
  },
  'globals': {
    'localStorage': true,
    'location': true,
    'Vue': true,
    'CFG': true,
    '$': true,
    'require': true
  }
}

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'prettier',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  plugins: ['prettier'],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
        'cypress/support/**/*.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/no-deprecated-slot-attribute': 0,
    'vue/multi-word-component-names': 0, // 檔案名稱需要多詞避免重複
    // 'no-undef': 0, // 已經使用 unplugin-auto-import 自動import vue
    // 'no-unused-vars': 0,       // 未使用的變數
    'vue/valid-v-slot': 0,
  },
}

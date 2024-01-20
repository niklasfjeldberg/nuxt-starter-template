module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    'dist',
    'public',
    'node_modules',
    'coverage',
    '.DEV',
    'pnpm-lock.yaml',
  ],
  rules: {
    // Prettier
    'prettier/prettier': ['error', { semi: true }],
    // Eslint
    'object-shorthand': 'off',
    'no-console': 'off',
    // Vue
    'vue/multi-word-component-names': 'off',
    'vue/attribute-hyphenation': ['error', 'never', { ignore: [] }],
    // Tailwind CSS
    'tailwindcss/no-custom-classname': [
      'error',
      {
        whitelist: ['.*(bg-|text-|border-).*'],
      },
    ],
  },
};

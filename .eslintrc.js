module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  rules: {
    semi: ['error', 'always'],
    'linebreak-style': ['error', 'windows'],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@api', './src/api/'],
          ['@styles', './src/assets/styles/'],
          ['@images', './src/assets/images/'],
          ['@hooks', './src/hooks/'],
          ['@modules', './src/modules/'],
          ['@utils', './src/utils/'],
          ['@components', './src/views/components/'],
          ['@containers', './src/views/containers/'],
          ['@pages', './src/views/pages/'],
          ['@ui', './src/views/ui/'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};

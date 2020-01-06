module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    ['@babel/plugin-proposal-class-properties'],
    [
      'module-resolver',
      {
        root: ['./src'],
        paths: {
          '*': ['./src'],
        },
        cwd: 'babelrc',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
}

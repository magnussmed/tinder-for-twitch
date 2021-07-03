module.exports = (env) => {
  'use strict';

  let scripts = {};
  scripts.rules = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                esmodules: true,
              },
            },
          ],
        ],
      }
    },
  };

  return scripts;
};

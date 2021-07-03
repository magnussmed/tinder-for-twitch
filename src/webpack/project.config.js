module.exports = (env) => {
  'use strict';

  const path = require('path');

  let projectConfig = {};

  projectConfig.name = 'tinder-for-twitch';

  projectConfig.assets = [];
  projectConfig.assets.push(
    'js'
  );

  /*
   * used to copy static assets into dist directory.
   */
  projectConfig.staticAssets = [];
  projectConfig.staticAssets.push(
    {
      from: path.resolve(process.cwd(), '..', 'manifest.json'),
      to: path.resolve(process.cwd(), '..', 'dist', 'manifest.json'),
    },
    {
      from: path.resolve(process.cwd(), '..', 'icon.png'),
      to: path.resolve(process.cwd(), '..', 'dist', 'icon.png'),
    },
    {
      from: path.resolve(process.cwd(), 'js', 'lib', 'jquery.min.js'),
      to: path.resolve(process.cwd(), '..', 'dist', 'js', 'jquery.min.js'),
    },
  );

  projectConfig.entries = {
    'background': path.resolve(__dirname, 'entries', 'background.js'),
    'content': path.resolve(__dirname, 'entries', 'content.js'),
  };

  return projectConfig;
};

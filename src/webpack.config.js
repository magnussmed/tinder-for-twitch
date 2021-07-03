module.exports = ( env ) => {
  'use strict';

  const fs = require('fs');

  /*
   * Import project configuration.
   * This is where we define the project specific configuration for use across the webpack configuration.
   */
  const projectConfig = require('./webpack/project.config')(env);

  // import config modules
  const configCommon = require('./webpack/common.config')(env);
  
  // utility class
  const utils = require('./webpack/utils/core');

  /*
   * Create default project directories (if they do not exist).
   * This prevents webpack errors from occuring due to non-existing directories.
   */
  projectConfig.assets.forEach((directory) => {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }
  });

  utils.logToConsole( env );

  return configCommon;
};

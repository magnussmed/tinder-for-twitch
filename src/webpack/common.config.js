module.exports = (env) => {
  'use strict';

  const path = require('path');

  /*
   * Setup boolean check to toggle configuration settings based on whether the environment should be optimized for production or not.
   */
  const optimizeForProduction = (typeof env !== 'undefined' && env && env.production === true);

  /*
   * Setup boolean check to toggle configuration settings based on whether the environment should be optimized for development or not.
   */
  const optimizeForDevelopment = (typeof env !== 'undefined' && env && env.development === true);

  /*
   * Import project configuration.
   * This is where we define the project specific configuration for use across the webpack configuration.
   */
  const projectConfig = require('./project.config')(env);
  /*
   * Import individual webpack parts.
   * This is where rules for various asset types and optimization are declared and plugins are setup for the different environments.
   */
  const parts = require('./webpack.parts')(env);

  /*
   * config
   */
  let config = {};

  /*
   * Setup source-maps for the development environment
   */
  if (optimizeForDevelopment) {
    config.devtool = 'source-map';
  }

  /*
   * define entry file(s)
   */
  config.entry = projectConfig.entries;

  /*
   * define output file(s) - defaults to the dist folder
   */
  config.output = {
    path: path.resolve(process.cwd(), '..', 'dist'),
    filename: (chunkData) => {
      return 'js/' + chunkData.chunk.name + (optimizeForProduction ? '.min' : '' ) + '.js';
    },
    chunkFilename: 'js/[id].js'
  };

  /*
   * set root context path
   */
  config.context = path.resolve(__dirname);

  /*
   * define rules for various assets
   */
  config.module = {};
  config.module.rules = parts.rules;

  /*
   * setup optimization behaviour
   */
  config.optimization = parts.optimization;

  /*
   * setup general plugins
   */
  config.plugins = parts.plugins;

  /*
   * Suppress default webpack errors.
   * Instead these are handled by some additional plugins.
   * webpack-stylish and friendly-errors-webpack-plugin
   */
  config.stats = 'errors-only';

  /*
   * setup paths from where to resolve modules
   */
  config.resolve = {};
  config.resolve.modules = [
    'node_modules'
  ];

  return config;
};

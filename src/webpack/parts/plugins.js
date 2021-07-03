module.exports = (env) => {
  'use strict';

  /*
   * Import global/vendor dependencies.
   */
  const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
  const BundleAnalyzerPl = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  const CopyPlugin = require('copy-webpack-plugin');
  const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");
  const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
  const path = require('path');
  const StyleLintPl = require('stylelint-webpack-plugin');
  const Stylish = require('webpack-stylish'); // beautifies/provides better output for the shell console.
  const SvgSpritePlugin = require('svg-sprite-loader/plugin');

  /*
   * Import project configuration.
   * This is where we define the project specific configuration for use across the webpack configuration.
   */
  const projectConfig = require('../project.config')(env);

  /*
   * Setup boolean check to toggle configuration settings based on whether the environment should be optimized for production or not.
   */
  const optimizeForProduction = (typeof env !== 'undefined' && env && env.production === true);

  /*
   * Initiate plugins array.
   */
  let plugins = [];

  /*
   * setup default plugins
   */
  if (projectConfig.staticAssets) {

    plugins.push(
      /*
      * Copies the vendor assets to the dist folder
      */
      new CopyPlugin(
        projectConfig.staticAssets
      )
    );
  }

  plugins.push(
    /*
     * Extracts and parses, (post-)css.
     */
    new MiniCssExtractPlugin({
      filename: 'css/[name]' + (optimizeForProduction ? '.min' : '') + '.css',
      chunkFilename: '[name].[chunkhash]' + (optimizeForProduction ? '.min' : '') + '.css',
    }),
    /*
     * Intantiate plugins related to svg sprite generation.
     */
    new SvgSpritePlugin({
      plainSprite: true
    }),
    /*
     * Parses scss files and returns errors and warnings in the shell console.
     */
    new StyleLintPl({
      configFile: path.resolve(__dirname, '..', '..', 'stylelint.config.js'),
      files: [
        '../**/css/*.css',
      ]
    }),
    /*
     * Provides an opinionated, differently styled output and overview of the webpack output to the shell console.
     */
    new Stylish(),
    /*
     * Improves error handling in webpack compilation.
     */
    new FriendlyErrorsWebpackPlugin()
  );

  if (optimizeForProduction) {
    plugins.push(
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true
              }
            }
          ],
        },
      }),
    );
  }

  /*
   * browsersync
   */
  if (typeof env !== 'undefined' && env && env.browsersync === true) {
    /*
     * Spins up a localhost webserver given a port and url, loads up the default browser on the client machine and auto-refreshes upon saving any changes to the webpack entry assets.
     */
    plugins.push(
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 1337,
        proxy: projectConfig.url
      })
    );
  }

  /*
   * analyze
   */
  if (typeof env !== 'undefined' && env && (env.production === true) && (env.analyze === true)) {
    /*
     * Spins up a localhost webserver, loads up the default browser on the client machine and outputs stats and a visualization of the size of the entire webpack bundle.
     * Defaults to the production bundle.
     */
    plugins.push(
      new BundleAnalyzerPl()
    );
  }

  /*
   * Return the optimization object for consumption by webpack.
   */
  return plugins;
};

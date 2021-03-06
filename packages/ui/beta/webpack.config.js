const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const webpack  = require('webpack');
require('dotenv').config()
const config = require('config');
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  ['core-ui']);

module.exports = {
  output: {
    uniqueName: "beta",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      APP_CONFIG:JSON.stringify(config ||{})
    }),
    new ModuleFederationPlugin({
      name: "beta",
      filename: "remoteEntry.js",  // 2-3K w/ Meta Data
      exposes: {
          './SupportModule': './src/app/support/support.module.ts',
          './AdminModule': './src/app/admin/admin.module.ts',
      },        
        // For remotes (please adjust)
        // name: "beta",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },        
        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "bootstrap": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "font-awesome": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};

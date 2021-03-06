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
    uniqueName: "alpha",
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
      
        // For remotes (please adjust)
        // name: "alpha",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

        // },
        name: "alpha",
        filename: "remoteEntry.js",  // 2-3K w/ Meta Data
        exposes: {
            './StoresModule': './src/app/stores/stores.module.ts',
            './AdminModule': './src/app/admin/admin.module.ts',
        },        

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};

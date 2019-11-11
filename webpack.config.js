const dotenv = require('dotenv')
const { resolve } = require('path')

dotenv.config()


module.exports = {
  // Mode
  mode: process.env.MODE || 'production',

  // Modules
  module: {
    rules: [
      // Svelte
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: { /* Options and preprocess */ }
        }
      }
    ]
  },
  
  // Resolve
  resolve: {
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    alias: {
      svelte: resolve('node_modules', 'svelte'),      
    }
  },

  // Entry
  entry: {
    product1: resolve('src/product1/index.js'),
    product2: resolve('src/product2/index.js')
  },
  
  // Output
  output: {
    filename: '[name].js', // Saída: product1.js, product2.js
    path: resolve('dist/')
  },
}

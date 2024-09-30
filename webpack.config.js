// webpack.config.js
module.exports = {
    resolve: {
      extensions: ['.js', '.jsx', '.mjs'],
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules\/(?!@tanstack)/, // Allow @tanstack/query-devtools to be processed
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-proposal-private-methods',
                '@babel/plugin-proposal-class-properties',
              ],
            },
          },
        },
      ],
    },
  };
  
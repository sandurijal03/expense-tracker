const path = require('path')
const HtmlWebapackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      },
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(s?css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [new HtmlWebapackPlugin({ template: './public/index.html' })],
  devServer: {
    port: 5000,
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    compress: true,
    historyApiFallback: true,
  },
}

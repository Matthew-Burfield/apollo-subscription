var path = require('path')

module.exports = {
  entry: './client.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '/public/client'),
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: '/public'
  },
  module: {
    rules: [
      {
        include: path.resolve(__dirname),
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      }]
  }

}
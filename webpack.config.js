module: {
  rules: [
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [
                require('bourbon').includePaths
              ]
            }
          }
        }
      ]
    }
  ]
}
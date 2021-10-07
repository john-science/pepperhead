
module.exports = {
  publicPath: './',
  pages: {
    'index': {
      entry: './src/entry/main.js',
      template: 'public/index.html',
      title: 'Hot Sauce Reviews by Some Pepper Head',
    },
    'wanted': {
      entry: './src/entry/wanted/index.js',
      template: 'public/wanted.html',
      title: 'Sauces I want to try',
    }
  }
}

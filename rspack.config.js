import * as NodePath from 'node:path'
export default /** @type {import('@rspack/core').Configuration} */({
  context: import.meta.dirname,
  mode: 'production',
  entry: {
    barrel:'./src/barrel.js',
    'named-re-exports':'./src/named-re-exports.js',
    foo:'./src/foo.js'
  },
  devtool: false,
  output: {
    path: NodePath.resolve(import.meta.dirname, 'rspack-dist'),
    module: true,
    clean: true,
    filename: '[name].js',
    library: {
      type: 'module'
    }
  },
  externals: [({request, contextInfo: {issuer}}, callback) => {
    if (issuer) {
      return callback(null, request)
    }
    callback()
  }],
  optimization: {
    minimize: false,
  },
  experiments: {
    outputModule: true,
  }

})
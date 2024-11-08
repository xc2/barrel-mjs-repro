import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: 'es2022',
      dts: false,
      bundle: false,
      source: {
        entry: {
          main: ['src/**']
        }
      },
      output: {
        target: 'node'
      },
      tools: {
        rspack: [{
          plugins: [
            {
              apply(compiler) {
                console.log('rspack version:', compiler.rspack.rspackVersion)
              }
            }
          ]
        }]
      }
    },
  ],
});

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
      }
    },
  ],
});

import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/index.ts',
  output: {
    file: './dist/bundle.js',
    format: 'es',
    inlineDynamicImports: true,
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
  external: ['hnswlib-node', 'mammoth'],
};

import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

const input = ['src/index.ts'];

export default {
    input,
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
        nodeResolve({ browser: true }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        }),
        terser()
    ],
    output: {
        file: `dist/${pkg.name}.min.js`,
        format: 'umd',
        name: 'rahmetAuth',
        esModule: false,
        exports: 'named',
        sourcemap: true
    }
};

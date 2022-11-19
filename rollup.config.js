import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import image from '@rollup/plugin-image';
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

const external = ['react', 'react-dom', 'styled-components'];
const projectRootDir = path.resolve(__dirname);

export default {
	input: ['src/index.ts'],
	output: [
		{
			dir: 'lib/esm',
			format: 'esm',
			sourcemap: true,
		},
		{
			dir: 'lib/cjs',
			format: 'cjs',
			sourcemap: true,
		},
	],
	preserveModules: true,
	external,
	plugins: [
		typescript({
			tsconfig: './tsconfig.json',
			useTsconfigDeclarationDir: true,
			tsconfigOverride: {
				exclude: [
					'**/__tests__',
					'**/*.test.ts',
					'**/*.test.tsx',
					'**/*.stories.tsx',
				],
			},
		}),
		peerDepsExternal(),
		commonjs(),
		alias({
			customResolver: resolve({ extensions: ['.tsx', '.ts'] }),
			entries: Object.entries({
				Hooks: ['./src/hooks/*'],
				Utils: ['./src/utils/*'],
				Atoms: ['./src/components/atoms'],
				Molecules: ['./src/components/molecules'],
				Organisms: ['./src/components/organisms'],
				Theme: ['./src/theme'],
				'@Types': ['./types'],
				Styles: ['./src/styles'],
				Icons: ['./src/components/icons'],
				/**/
			}).map(([alias, value]) => ({
				find: new RegExp(`${alias.replace('/*', '')}`),
				replacement: path.resolve(
					projectRootDir,
					`${value[0].replace('/*', '')}`
				),
			})),
		}),
		esbuild({
			include: /\.[jt]sx?$/,
			minify: true,
			target: 'es2017',
			loaders: {
				'.json': 'json',
				'.js': 'jsx',
			},
		}),
		postcss({
			extensions: ['.css'],
		}),
		image(),
	],
};

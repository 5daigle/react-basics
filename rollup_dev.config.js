import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import html from '@rollup/plugin-html';
import serve from "rollup-plugin-serve";
import replace from '@rollup/plugin-replace';
import livereload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss"

export default {
	input: 'src/main.tsx',
	output: {
		file: 'public/index.js',
		format: 'iife',
        sourcemap: true
	},
	plugins: [
        postcss(),
		replace({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'preventAssignment': true
		}),
		resolve(),
		commonjs(),
		typescript({ tsconfig: "./tsconfig.json" }),
		html(),
		serve({
            open: true,
            verbose: true,
            contentBase: ["", "public"],
            host: "localhost",
            port: 3000,
        }),
        livereload({watch: "src"})
	]
};
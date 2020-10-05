import vue from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import css from 'rollup-plugin-css-only'

const path = require('path')
const customResolver = resolve({
  extensions: ['.js', '.vue']
})

const plugins = [
  // peerDepsExternal(),
  alias({
    entries: [
      {
        find: '~',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  }),
  resolve({
    extensions: ['.js', '.vue']
  }),
  commonjs(),
  vue({
    css: false,
    style: {
      preprocessOptions: {
        scss: {
          includePaths: ['node_modules']
        }
      }
    }
  }),
  css({ 
    output: 'dist/fmv-avatar.css' 
  })
]

export default [
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/fmv-avatar.esm.js'
    },
    plugins
  },

  // SSR build.
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: 'dist/fmv-avatar.ssr.js'
    },
    plugins
  },

  {
    input: 'src/index.js',
    output: {
      format: 'umd',
      name: 'FmvAvatar',
      file: 'dist/fmv-avatar.umd.js'
    },
    plugins
  }
]

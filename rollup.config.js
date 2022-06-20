export default {
  input: './src/index.js',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
      generatedCode: 'es2015',
    },
    {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
      generatedCode: 'es2015',
    },
  ],
  external(id) {
    return !/^[\.\/]/.test(id);
  },
};

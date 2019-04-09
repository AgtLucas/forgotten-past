const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const atImport = require('postcss-import');
const focus = require('postcss-focus');

module.exports = {
  plugins: [
    atImport,
    postcssPresetEnv({
      stage: 0
    }),
    focus,
    cssnano({ autoprefixer: false })
  ],
};
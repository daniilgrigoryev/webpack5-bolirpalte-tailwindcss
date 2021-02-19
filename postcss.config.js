module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./**/*.html'],
    }),
    require('postcss-import')({
      plugins: [],
      path: ['./node_modules'],
    }),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env')({
      autoprefixer: {},
      features: {
        'nesting-rules': true,
      },
    }),
  ],
}

module.exports = {
  plugins: [
    'tailwindcss',
    process.env.NODE_ENV === 'production'
      ? [
          'postcss-flexbugs-fixes',
          [
            'postcss-preset-env',
            [
              '@fullhuman/postcss-purgecss',
              {
                autoprefixer: {
                  flexbox: 'no-2009'
                },
                stage: 3,
                features: {
                  'custom-properties': false
                },
                defaultExtractor: content =>
                  content.match(/[\w-/:]+(?<!:)/g) || []
              }
            ]
          ]
        ]
      : undefined,
    'autoprefixer'
  ]
};

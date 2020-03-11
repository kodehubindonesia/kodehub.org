// module.exports = {
//     plugins: [
//         "postcss-import",
//         "tailwindcss",
//         "autoprefixer"
//     ]
// };

const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const prod = process.env.NODE_ENV === 'production';
module.exports = {
  plugins: [
    'tailwindcss',
    prod ? 'autoprefixer' : null,
    prod
      ? [
          'cssnano',
          {
            preset: 'default'
          }
        ]
      : null,
    prod
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: [
              './pages/**/*.{js,jsx,ts,tsx}',
              './src/shared/components/**/*.{js,jsx,ts,tsx}'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          }
        ]
      : null,
    'postcss-preset-env'
  ]
  // webpack: function (config) {
  //     config.module.rules.push({
  //         test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
  //         use: {
  //             loader: 'url-loader',
  //             options: {
  //                 limit: 100000,
  //                 name: '[name].[ext]'
  //             }
  //         }
  //     })
  //     return config
  // }
};

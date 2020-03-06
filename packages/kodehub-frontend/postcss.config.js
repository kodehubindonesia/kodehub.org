// module.exports = {
//     plugins: [
//         "postcss-import",
//         "tailwindcss",
//         "autoprefixer"
//     ]
// };

const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        "tailwindcss",

        process.env.NODE_ENV === "production"
            ? [
                "@fullhuman/postcss-purgecss",
                {
                    content: [
                        "./pages/**/*.{js,jsx,ts,tsx}",
                        "./src/shared/components/**/*.{js,jsx,ts,tsx}"
                    ],
                    defaultExtractor: content => content.match(/[w-/:]+(?<!:)/g) || []
                }
            ]
            : undefined,
        'postcss-preset-env',

    ],
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

// module.exports = {
//     plugins: [
//         'tailwindcss',
//         'postcss-preset-env',
//     ],
// }
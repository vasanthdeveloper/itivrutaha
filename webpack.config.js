/* eslint-env node */

const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src', 'itivrutaha.ts'),
    mode: 'production',
    output: {
        filename: 'itivrutaha.js',
        path: path.join(__dirname, 'dist', 'web')
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    devServer: {
        index: '/example/web/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: {
                                declaration: false,
                                incremental: false,
                                declarationDir: false,
                                declarationMap: false
                            }
                        }
                    }
                ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        // new browserSync({
        //     // browse to http://localhost:8080/ during development
        //     host: '0.0.0.0',
        //     port: 8080,
        //     server: { baseDir: __dirname },
        //     files: `${__dirname}/**/*`,
        //     open: false,
        //     notify: false
        // })
    ]
}
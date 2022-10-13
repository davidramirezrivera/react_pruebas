const path = require('path'); //nos indica en donde se esta inicilizando el proyecto (tu computadora, la de un amigo o en un servidor)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require('sass-loader');
const { dirname } = require('path');

module.exports = {// se colocara cada configuracion necesaria para nuestro proyecto 
    entry: './src/index.js', // cual es el punto de entrada de nuestra aplicacion (es decir con que archivo se inicia)
    output: { // se inidica donde vivira el proyecto una vez este cargado 
        path: path.resolve(__dirname,'dist'), // averigua en donde nos encontramos y luego crea una carpeta en donde vivira el proyecto
        //__dirname es la que indica en que carpeta nos encontramos 
        // dist es la carpeta que se creara en donde vive el proyecto
        filename: 'bundle.js', // nombre al empaquetado que se va a crear
        publicPath:'/',
    },
    mode: 'development',
    resolve:{
        extensions: ['.js','.jsx'], // extensiones que vamos a estar usando 
        alias:{
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
        }
    },
    module:{ // reglas para nuestros loaders y los plugins necesarios 
        rules:[
            {
                test: /\.(js|jsx)$/, // detectar js y jsx
                exclude: /node_modules/, //que no detecte nada de la carpeta node modules por que podria generar un conflicto
                use:{ // detectar los loaders a usar
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader' 
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
          },
        compress: true,
        port: 3005,
        historyApiFallback: true,
      }
}
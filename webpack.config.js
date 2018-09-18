const path = require('path') // 'path' - node library specified to works with pathes. THis functions returns an object 
// with bunch of methods to work with pathes  

// __dirname - global variable that provides absolute path to the root of our project eg. User/Pawel/Nauka/JS..


module.exports = {
    entry: './src/index.js', // file which we want to procces through webpack
    output: {
        path: path.resolve(__dirname, 'public/scripts'), // dirname is going to be different on each machine thats why we use resolve function. In the end we have an absolute patch that is different on each machine
        filename: 'bundle.js' // name of the output file
    },
    module: {
        rules: [{
            test: /\.js$/, // checks if the files contains '.js ' extension at the end. 
            exclude: /node_modules/, // excludes the node modules to be processed, no need to procces that file through babel
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env'] // sets the defaul presets for babel
                }
            }
        }]
    },
    devServer: { // webpack dev-server
        contentBase: path.resolve(__dirname, 'public'), // absolute path, we need to specify place for serve from
        publicPath: '/scripts/' // relative position that starts from a public.
    },
    devtool: 'source-map' // it provides accurates information about code to the browser, eg  which line code lies in, shows original code not processed by webpack(babel)
}
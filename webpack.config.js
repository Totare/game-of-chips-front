const { resolve } = require('path');

module.exports = {
	// entry: resolve('./loader.js'),
	entry: resolve('./src/GameOfChips.js'),
    mode: 'development',
    watch: true,
    output: {
        path: resolve('./'),
		filename: 'loader.min.js',
		// libraryTarget: 'var',
		// library: 'GameOfChips'
    }
}

// const path = require('path');
// // const { resolve } = require('path');

// module.exports = {
// 	mode:'development',
//     entry: './loader.js',
// 	output: {
//         // path: resolve('./'),
// 		path: path.resolve(__dirname, './'),
// 		filename: './loader.min.js',
// 		libraryTarget: 'var',
// 		library: 'GameOfChips'
// 	}
// };
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// .envファイルの内容をprocess.envに展開する
dotenv.config();

module.exports = {
  // --- モード ---
  // 　development:	開発用	速いビルド・デバッグしやすい出力
  // 　production:  本番用	最適化・圧縮されて軽量な出力
  mode: 'development',

  // --- bundle.jsの名前とエントリーポイント ---
  entry: {
    main: './src/index.js',   // 通常ページ
    show: './src/show.jsx',   // Showページ
  },

  // --- bundle.jsの出力 ---
  output: {
    // 出力フォルダ（絶対パスで指定）
    path: path.resolve(__dirname, 'docs'),

    // 出力ファイル名
    filename: (pathData) => {
      const name = pathData.chunk.name;
      if (name === 'show') {
        return '[name]/[name].bundle.js';
      } else {
        return '[name].bundle.js';
      }
    },

    // 出力フォルダを毎回クリーンアップ
    clean: {
      // フォルダを削除対象から除外する
      keep: /(page|css|image|svg|webfonts)\/.*/,
    },
  },

  // --- 読み込みの設定 ---
  module: {
    rules: [
      // js, jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // css
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // --- import時の拡張子省略を許可 ---
  resolve: {
    alias: {
      // 絶対パスでインポートできるようにする
      '@': path.resolve(__dirname, 'src'),
    },

    // import時の拡張子省略を許可
    extensions: ['.js', '.jsx'],
  },

  // --- ページのプラグイン設定 ---
  plugins: [
    // 通常ページ
    new HtmlWebpackPlugin({
      template: './src/index.html',   // ソースファイル
      filename: 'index.html',         // 出力ファイル
      chunks: ['main'],               // 読み込むbundle.js
    }),

    // Showページ
    new HtmlWebpackPlugin({
      template: './src/show.html',  // ソースファイル
      filename: 'show/index.html',  // 出力ファイル
      chunks: ['show'],             // 読み込むbundle.js
    }),

    // process.envの情報をブラウザ側コードに展開する
    // 　例：process.env.API_KEY
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],

  // --- 開発サーバー設定 ---
  devServer: {
    // 開発時は、docsフォルダ内のimageなどがそのまま公開される
    static: './docs',
    port: 3000,
    open: true,
  },
};

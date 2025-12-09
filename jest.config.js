export default {
  // テスト対象ファイル
  testMatch: ['<rootDir>/test/unit/**/*.(test|spec).[jt]s?(x)'],
  
  // ファイル変換ルール
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  
  moduleNameMapper: {
    // CSSをモック化する
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    
    // テストコード上で絶対パスでインポートできるようにする
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  
  // Reactを動かすためにブラウザ環境を再現
  testEnvironment: 'jsdom',
};

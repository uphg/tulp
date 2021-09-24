module.exports = {
  moduleDirectories: ['node_modules'],
  testMatch: [
    '<rootDir>/test/**/*.(spec|test).(ts|tsx)'
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
    'tsx',
    'vue'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
    // ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
    ".+\\.(css|styl)$": "jest-css-modules-transform",
    '^.+\\.(j|t)sx?$': 'babel-jest'
  },
}
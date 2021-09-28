// 注释项为当前配置与默认值相同的项

module.exports = {
  // 在每次测试之前自动清除模拟调用和实例。相当于 jest.clearAllMocks() 每次测试前调用
  clearMocks: true,

  // 在执行测试时是否收集覆盖率信息（暂时关闭，配置持续集成后打开）。
  // collectCoverage: true,

  // 全局配置模式，指定需要收集测试覆盖率的文件目录
  collectCoverageFrom: ['<rootDir>/src/**/*.(ts|tsx)'],

  // 用于跳过测试覆盖率集合的 正则表达式字符串数组
  // coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: ['node_modules'],

  // 您的模块使用的文件扩展名数组（把最常用的放在最前）
  moduleFileExtensions: [
    'ts',
    'tsx',
    'vue',
    'js',
    'json',
  ],

  // Jest 用于检测测试文件目录的全局配置
  testMatch: [
    '<rootDir>/test/**/*.(spec|test).(ts|tsx)'
  ],

  // 测试时需要跳过的文件夹正则数组
  // testPathIgnorePatterns: ['/node_modules/'],

  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
    ".+\\.(css|styl)$": "jest-css-modules-transform",
    '^.+\\.(j|t)sx?$': 'babel-jest'
  },
}
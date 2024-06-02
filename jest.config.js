// jest.config.js
module.exports = {
    roots: ['<rootDir>/src'],
  
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  
    setupFiles: [
      require.resolve('react-app-polyfill/jsdom'),
    ],
  
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
      '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
  
    testEnvironment: 'jsdom',
  
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': require.resolve('babel-jest'),
      '^.+\\.css$': require.resolve('jest-css-modules-transform'),
      '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': require.resolve('file-transformer'),
    },
  
    transformIgnorePatterns: [
      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
  
    modulePaths: [],
  
    moduleNameMapper: {
      '^react-native$': 'react-native-web',
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
  
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname',
    ],
  
    resetMocks: true,
  };
  
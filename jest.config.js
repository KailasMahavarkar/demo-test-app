module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '@oxygen/native-theme': '<rootDir>/src/theme/theme',
    '@oxygen/theme': '<rootDir>/mocks/fileMock.js',
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/mocks/fileMock.js',
  },
};

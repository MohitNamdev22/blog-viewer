const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // For absolute imports
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom',
  coverageDirectory: './coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx}',
    'src/pages/**/*.{js,jsx}',
    '!src/pages/_app.js',
    '!src/pages/api/**',
  ],
  coverageProvider: 'babel', // From your init choices
  clearMocks: true, // From your init choices
};

module.exports = createJestConfig(customJestConfig);
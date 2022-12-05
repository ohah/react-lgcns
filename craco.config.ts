import path from 'path';

module.exports = {
  webpack: {},
  jest: {
    configure: {
      transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
      },
      preset: 'ts-jest',
      roots: ['<rootDir>/src'],
      testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
      testEnvironment: 'jsdom',
    },
  },
};

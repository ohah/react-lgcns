import { compilerOptions } from './tsconfig.json';

import type { Config } from 'jest';
export default async (): Promise<Config> => {
  return {
    verbose: false,
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    transform: {
      '^.+\\.(ts|tsx)$': [
        'ts-jest',
        {
          supportsStaticESM: true,
        },
      ],
      '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    },
    rootDir: './',
    preset: 'ts-jest',
    roots: ['<rootDir>'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jsdom',
    modulePaths: [compilerOptions.baseUrl],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '@emotion/styled': '<rootDir>/node_modules/@emotion/styled',
    },
    snapshotSerializers: ['@emotion/jest/serializer'],
  };
};

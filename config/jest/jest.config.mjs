import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: '../../' })

const config = {
    clearMocks: true,
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    coverageProvider: 'v8',
    moduleDirectories: ['node_modules', '<rootDir>src'],
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'mts',
        'cts',
        'tsx',
        'json',
        'node'
    ],
    modulePaths: ['<rootDir>src'],
    preset: 'ts-jest',
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    moduleNameMapper: {
        '^features/(.*)$': '<rootDir>src/features/$1'
    }
}

export default createJestConfig(config)

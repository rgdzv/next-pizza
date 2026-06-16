import nextJest from 'next/jest.js'
import type { Config } from 'jest'

const createJestConfig = nextJest({
    dir: '../../'
})

const config: Config = {
    clearMocks: true,
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    coverageProvider: 'v8',
    moduleDirectories: ['node_modules'],
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
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)']
}

export default createJestConfig(config)

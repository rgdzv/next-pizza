import nextJest from 'next/jest.js'
import type { Config } from 'jest'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
    clearMocks: true,
    coverageProvider: 'v8',
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)']
}

const jestConfigWithOverrides = async () => {
    const configFn = createJestConfig(config)
    const res = await configFn()

    res.moduleNameMapper = {
        '\\.svg': '<rootDir>src/shared/tests/jest/mocks/svgr.tsx',
        ...res.moduleNameMapper
    }

    return res
}

export default jestConfigWithOverrides

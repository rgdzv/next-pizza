/*eslint-disable*/
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    webpack(config) {
        const fileLoaderRule = config?.module?.rules?.find((rule: any) =>
            rule.test?.test?.('.svg')
        )

        config?.module?.rules?.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/ // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: {
                    not: [...fileLoaderRule.resourceQuery.not, /url/]
                },
                use: ['@svgr/webpack']
            }
        )

        fileLoaderRule.exclude = /\.svg$/i

        return config
    }
}

module.exports = nextConfig

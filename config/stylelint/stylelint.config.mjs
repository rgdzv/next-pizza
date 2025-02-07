/** @type {import('stylelint').Config} */

const config = {
    plugins: ['@stylistic/stylelint-plugin'],
    extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
    rules: {
        '@stylistic/indentation': 4
    }
}

export default config

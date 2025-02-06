/** @type {import('stylelint').Config} */
export default {
    plugins: ['@stylistic/stylelint-plugin'],
    extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
    rules: {
        '@stylistic/indentation': 4
    }
}

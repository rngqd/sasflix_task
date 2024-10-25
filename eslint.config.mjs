// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    {
        rules: {
            quotes: ['error', 'single'],
            'no-unused-vars': [1, {vars: 'all', args: 'none'}],
            'no-var': 'warn',
            'prefer-const': 'warn',
            'object-curly-spacing': ['error', 'always'],
        }
    }
)

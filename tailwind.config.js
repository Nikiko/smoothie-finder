/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
 const plugin = require('tailwindcss/plugin');

 module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue"
    ],
    darkMode: "class",
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('not-first', '&:not(:first-child)'),
            addVariant('not-last', '&:not(:last-child)'),

            addVariant('not-first-before', '&:not(:first-child)::before'),
            addVariant('not-last-before', '&:not(:last-child)::before'),

            addVariant('not-first-after', '&:not(:first-child)::after'),
            addVariant('not-last-after', '&:not(:last-child)::after')
        }),
    ],
    theme: {
        colors: {
            'primary': 'rgb(var(--color-primary) / <alpha-value>)',
            'primary-focus': 'rgb(var(--color-primary-focus) / <alpha-value>)',
            'primary-content': 'rgb(var(--color-primary-content) / <alpha-value>)',

            'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
            'secondary-focus': 'rgb(var(--color-secondary-focus) / <alpha-value>)',
            'secondary-content': 'rgb(var(--color-secondary-content) / <alpha-value>)',

            'accent': 'rgb(var(--color-accent) / <alpha-value>)',
            'accent-focus': 'rgb(var(--color-accent-focus) / <alpha-value>)',
            'accent-content': 'rgb(var(--color-accent-content) / <alpha-value>)',

            'neutral': 'rgb(var(--color-neutral) / <alpha-value>)',
            'neutral-focus': 'rgb(var(--color-neutral-focus) / <alpha-value>)',
            'neutral-content': 'rgb(var(--color-neutral-content) / <alpha-value>)',

            'base': 'rgb(var(--color-base) / <alpha-value>)',
            'base-100': 'rgb(var(--color-base-100) / <alpha-value>)',
            'base-200': 'rgb(var(--color-base-200) / <alpha-value>)',
            'base-300': 'rgb(var(--color-base-300) / <alpha-value>)',
            'base-content': 'rgb(var(--color-base-content) / <alpha-value>)',

            'info': 'rgb(var(--color-info) / <alpha-value>)',
            'info-content': 'rgb(var(--color-info-content) / <alpha-value>)',

            'success': 'rgb(var(--color-success) / <alpha-value>)',
            'success-content': 'rgb(var(--color-success-content) / <alpha-value>)',

            'warning': 'rgb(var(--color-warning) / <alpha-value>)',
            'warning-content': 'rgb(var(--color-warning-content) / <alpha-value>)',

            'error': 'rgb(var(--color-error) / <alpha-value>)',
            'error-content': 'rgb(var(--color-error-content) / <alpha-value>)',

            'good': 'rgb(var(--color-good) / <alpha-value>)',
            'good-content': 'rgb(var(--color-good-content) / <alpha-value>)',

            'middle': 'rgb(var(--color-middle) / <alpha-value>)',
            'middle-content': 'rgb(var(--color-middle-content) / <alpha-value>)',

            'bad': 'rgb(var(--color-bad) / <alpha-value>)',
            'bad-content': 'rgb(var(--color-bad-content) / <alpha-value>)',
        },
        extend: {
            borderRadius: {
                'none': '0',
                'sm': '0.125rem',
                DEFAULT: '0.25rem',
                'md': '0.375rem',
                'lg': '0.5rem',
                'large': '1rem',
                'xl': '1.5rem',
                'xxl': '2rem',
                'full': '9999px',
            }
        }
    }
}


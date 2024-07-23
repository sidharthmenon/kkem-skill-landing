const colors = require('tailwindcss/colors')

module.exports = {
		content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    safelist: [
        {
          pattern: /max-w-\dxl/,
          variants: ['sm', 'md', 'lg', 'xl']
        }
    ],    
    theme: {
        extend: {
            colors: {
                danger: colors.rose,
                primary: colors.blue,
                success: colors.green,
                warning: colors.yellow,
                dark: "#003B89",
                light: "#7CBDD0"
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}

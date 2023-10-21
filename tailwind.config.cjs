module.exports = {
    content:['./src/**/*/*.{astro,html,js,jsx,tsx,vue,svelte}'],
    theme:{
        extends:{

        }
    },
    Plugin:[require('@tailwindcss/line-clamp')]
}
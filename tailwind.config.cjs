module.exports = {
    content:['./src/**/*/*.{astro,html,js,jsx}'],
    theme:{
        extends:{

        }
    },
    Plugin:[require('@tailwindcss/line-clamp')]
}
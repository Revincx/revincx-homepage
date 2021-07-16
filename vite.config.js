const { resolve } = require('path')
const { minifyHtml,injectHtml } = require('vite-plugin-html')
import config from './src/config.json'
import vue from '@vitejs/plugin-vue'

export default {
    resolve: {
        alias: {
            src: resolve(__dirname, 'src/')
        },
    },
    plugins: [
        vue(),
        minifyHtml(),
        injectHtml({
            injectData: {
                title: config.title,
                favico: `<link rel="icon" href="${config.favico}"/>`
            },
        }),
    ]
}
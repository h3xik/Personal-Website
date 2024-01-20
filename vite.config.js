import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    return {
        plugins: [
            vue({
                template: {
                    compilerOptions: {
                        isCustomElement: (tag) => ['ion-icon', 'dotlottie-player', 'lottie-vue-player'].includes(tag),
                    }
                }
            }),
            Unfonts({
                custom: {
                    families: {
                        'Noto Sans Mono': {
                            src: './src/assets/fonts/NotoSansMono*',
                        },
                    },
                    preload: true,
                    display: 'swap'
                },
            })
        ],
    };
});
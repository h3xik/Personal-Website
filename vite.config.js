import {defineConfig} from 'vite';
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [
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
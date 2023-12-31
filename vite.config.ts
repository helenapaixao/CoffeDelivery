import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(new URL('.', import.meta.url).pathname, 'src/components'),
      '@screens': path.resolve(new URL('.', import.meta.url).pathname, 'src/screens'),
      '@assets': path.resolve(new URL('.', import.meta.url).pathname, 'src/assets'),
      '@utils': path.resolve(new URL('.', import.meta.url).pathname, 'src/utils'),
      '@services': path.resolve(new URL('.', import.meta.url).pathname, 'src/services'),
      '@atoms': path.resolve(new URL('.', import.meta.url).pathname, 'src/components/Atoms'),
      '@molecules': path.resolve(new URL('.', import.meta.url).pathname, 'src/components/Molecules'),
      '@organisms': path.resolve(new URL('.', import.meta.url).pathname, 'src/components/Organisms'),
      '@templates': path.resolve(new URL('.', import.meta.url).pathname, 'src/components/Templates'),
      '@pages': path.resolve(new URL('.', import.meta.url).pathname, 'src/components/Pages'),
    },
  },
};

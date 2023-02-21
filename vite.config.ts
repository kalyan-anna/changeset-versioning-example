import { defineConfig, ConfigEnv } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default (arg: ConfigEnv) => {
  const generateScopedName =
    arg.mode === 'production'
      ? '[local]_[hash:base64:5]'
      : '[name]_[local]_[hash:base64:5]';

  return defineConfig({
    plugins: [
      dts({
        insertTypesEntry: true,
      }),
    ],
    publicDir: false,
    build: {
      sourcemap: true,
      lib: {
        entry: 'src/index.ts',
        name: 'MyLilButton',
        fileName: 'my-button',
        formats: ['es'],
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
    css: {
      modules: {
        generateScopedName,
      },
    },
  });
};

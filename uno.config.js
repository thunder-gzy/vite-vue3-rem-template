import { defineConfig, presetAttributify, presetIcons } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetRemToPx from '@unocss/preset-rem-to-px'
import transformerCompileClass from '@unocss/transformer-compile-class'
export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: '#ff0000',
      },
    },
  },
  // plugins: [
  // ],
  // presets: [
  //   presetUno(),
  //   presetRemToPx(),
  // ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({ scale: 1.2, warn: true }),
    presetRemToPx({
      // baseFontSize: 0.25,
    }),
  ],
  transformers: [transformerCompileClass()],
})

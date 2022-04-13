import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    colors: {
      black: '#000',
      cadet: 'hsl(180, 29%, 50%)',
      steal: {
        50: 'hsl(180, 52%, 96%)',
        100: 'hsl(180, 31%, 95%)',
        500: 'hsl(180, 8%, 52%)',
        600: 'hsl(180, 14%, 20%)',
      },
      white: '#FFF',
    },
    fontFamily: {
      spartan: ['League Spartan', 'sans-serif'],
    },
  },
});

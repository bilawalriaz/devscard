import type { Config } from '@/types/data';
import { enGB } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enGB,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Bilawal Riaz - Python Developer',
    description: "Bilawal Riaz's CV",
    faviconPath: '/src/assets/my-image.jpeg',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;

import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  react,
  astro,
  cypress,
  firebase,
  mongoDb,
  postgreSql,
  supabase,
  tailwindCss,
  python,
  sqlite3,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        python({
          level: 4,
          description: 'I love Python so much. Favourite libraries: requests, multiprocessing, SQLite3',
        }),
        sqlite3({
          level: 4,
          description: 'Used for most of my projects. Lightweight, powerful and easy to backup and replicate',
        }),
        tailwindCss({
          level: 3,
          description: 'Used for almost all of my projects. Used to prefer Bootstrap.',
        }),

        postgreSql({ level: 2 }),
        mongoDb({ level: 2 }),
        firebase({ level: 3, description: 'Used to handle auth for https://foodspots.uk' }),
        supabase({
          level: 3,
          description:
            'Briefly used for Youtube Summariser and other projects. Easy to get started with but ended up migrating to own SQLite3 instance for cost-effectiveness.',
        }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [react()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:gb', name: 'English - Native' },
        { icon: 'circle-flags:ur', name: 'Punjabi/Urdu' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;

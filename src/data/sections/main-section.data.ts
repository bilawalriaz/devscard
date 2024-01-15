import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.png'),
  fullName: 'Bilawal Riaz',
  role: 'Python Developer',
  details: [
    { label: 'Phone', value: '+44 7944324418', url: 'tel:+44 7944324418' },
    { label: 'Email', value: 'inbox@bilawal.net', url: 'mailto:inbox@bilawal.net' },
    { label: 'From', value: 'Manchester, Oldham' },
    { label: 'Salary range', value: '£50,000 - £80,000' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+44 7944324418' },
    { label: 'Email', value: 'inbox@bilawal.net' },
    { label: 'LinkedIn', value: '/in/bilawalriaz', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/bilawalriaz', url: 'https://github.com' },
    { label: 'Website', value: 'hyperflash.uk', url: '/', fullRow: true },
  ],
  description:
    "Experienced IT professional with a comprehensive background in IT infrastructure, cloud, bioinformatics and Python.\
    Demonstrated success in managing and executing large-scale\
    projects to satisfy business requirements. Pursuing a dynamic role in the IT/Cyber-Security sector to apply my\
    expertise and problem-solving acumen for substantial impact. \n \
    'Jack of all trades, master of none... oftentimes better than master of one.'",
  tags: [{ name: 'Open for freelance' }, { name: 'Working on side project (Youtube Summariser)' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Bilawal_Riaz.pdf',
  },
  links: [
    facebook({ url: 'https://hyperflash.uk' }),
    github({ url: 'https://github.com/bilawalriaz' }),
    linkedin({ url: 'https://uk.linkedin.com/in/bilawalriaz' }),
    twitter({ url: 'https://twitter.com/ssjbillz' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;

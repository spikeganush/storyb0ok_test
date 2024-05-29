import { TThreeColumnsWithPanelProps } from './ThreeColumnsWithPanel';

export const primaryDataStats: TThreeColumnsWithPanelProps = {
  image: {
    src: 'https://www.acu.edu.au/-/media/feature/pagecontent/imagestatisticswith2uppanel/acuupdate.jpg?h=560&w=440&la=en&hash=FAF85C0B5D1D42344105672171E32AB9',
    alt: 'Student walking in a street in Rome',
  },
  type: 'stats',
  upperPart: {
    title: 'We’re achieving great things',
    stats: [
      {
        title: 'Top',
        description: 'Catholic universities',
        value: '10',
      },
      {
        title: 'Top',
        description: 'of all universities worldwide',
        value: '2%',
      },
      {
        title: 'Top',
        description: 'for graduate employment',
        value: '7',
      },
    ],
    link: {
      url: 'https://www.acu.edu.au/about-acu/reputation-and-ranking',
      text: 'Learn more about excellence at ACU',
    },
  },
  cards: [
    {
      title: 'Study at ACU',
      content:
        'Prepare for a rewarding career while making an impact. Browse study options, search courses, find out how to apply, view admission pathways, and learn about fees and scholarships.',
      cta: {
        text: 'Study with us',
        url: 'https://www.acu.edu.au/study-at-acu',
        transparent: true,
      },
    },
    {
      title: 'Our research',
      content:
        'ACU fosters a community of outstanding researchers and collaborators. Browse your research options, view our priority research areas, and explore our research institutes.',
      cta: {
        text: 'Research with us',
        url: 'https://www.acu.edu.au/research-and-enterprise',
        transparent: true,
      },
    },
  ],
};

export const primaryDataText: TThreeColumnsWithPanelProps = {
  image: {
    src: 'https://www.acu.edu.au/-/media/feature/pagecontent/imagestatisticswith2uppanel/acuupdate.jpg?h=560&w=440&la=en&hash=FAF85C0B5D1D42344105672171E32AB9',
    alt: 'Student walking in a street in Rome',
  },
  type: 'text',
  upperPart: {
    title: 'We’re achieving great things',
    paragraphs: [
      'ACU is a public university that is open to everyone, regardless of their background. We are committed to providing a welcoming and inclusive environment for all students, staff, and visitors.',
      'Our students come from a diverse range of backgrounds, and we are proud to offer a range of programs that cater to their individual needs.',
    ],
    link: {
      url: 'https://www.acu.edu.au/about-acu/reputation-and-ranking',
      text: 'Learn more about excellence at ACU',
    },
  },
  cards: [
    {
      title: 'Study at ACU',
      content:
        'Prepare for a rewarding career while making an impact. Browse study options, search courses, find out how to apply, view admission pathways, and learn about fees and scholarships.',
      cta: {
        text: 'Study with us',
        url: 'https://www.acu.edu.au/study-at-acu',
        transparent: true,
      },
    },
    {
      title: 'Our research',
      content:
        'ACU fosters a community of outstanding researchers and collaborators. Browse your research options, view our priority research areas, and explore our research institutes.',
      cta: {
        text: 'Research with us',
        url: 'https://www.acu.edu.au/research-and-enterprise',
        transparent: true,
      },
    },
  ],
};

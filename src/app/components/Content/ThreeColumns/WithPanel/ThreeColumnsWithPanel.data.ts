import { TThreeColumnsWithPanelProps } from './ThreeColumnsWithPanel';

export const primaryDataStats: TThreeColumnsWithPanelProps = {
  image: {
    src: 'https://www.acu.edu.au/-/media/feature/pagecontent/imagestatisticswith2uppanel/acuupdate.jpg?h=560&w=440&la=en&hash=FAF85C0B5D1D42344105672171E32AB9',
    alt: 'Student walking in a street in Rome',
  },
  imagePosition: 'left',
  upperPartType: 'stats',
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
  lowerPart: [
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
  lowerPartType: 'cards',
  onStorybook: true,
};

export const primaryDataText: TThreeColumnsWithPanelProps = {
  image: {
    src: 'https://www.acu.edu.au/-/media/feature/pagecontent/imagestatisticswith2uppanel/acuupdate.jpg?h=560&w=440&la=en&hash=FAF85C0B5D1D42344105672171E32AB9',
    alt: 'Student walking in a street in Rome',
  },
  imagePosition: 'left',
  upperPartType: 'text',
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
  lowerPart: [
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
  lowerPartType: 'cards',
  onStorybook: true,
};

export const longPanelText: TThreeColumnsWithPanelProps = {
  image: {
    src: 'https://www.acu.edu.au/-/media/feature/pagecontent/imagewithstatistics/content_2up_3up_with_panel_placeholder_440x560/locations-collaborateplus-440x560.jpg?h=560&w=440&la=en&hash=0A3A74C6D759E7AAF7CD58D56C74E7EB',
    alt: 'Two women sitting at a table talking to each other',
  },
  imagePosition: 'right',
  upperPartType: 'text',
  upperPart: {
    title: 'Community event spaces, sport facilities and venue hire',
    paragraphs: [
      `If you have an event, we have a space. Our campuses have galleries, lecture halls, sport facilities and gyms that can be hired for events of all sizes.`,
    ],
    link: {
      url: 'https://www.acu.edu.au/locations/community-event-spaces-and-venue-hire',
      text: 'Browse venues',
    },
  },
  lowerPart: {
    title: 'Co-Lab',
    paragraphs: [
      `Co-Lab
Access our business incubator facilities and collaborate with other small businesses and startups by sharing resources, knowledge, research and ideas.`,
    ],
    link: {
      url: 'https://www.acu.edu.au/locations/co-lab',
      text: 'Innovate now',
    },
  },

  lowerPartType: 'text',
  onStorybook: true,
};

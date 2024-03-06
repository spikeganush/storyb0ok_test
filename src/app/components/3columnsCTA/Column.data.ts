import { title } from 'process';

export const primary = {
  topSeparator: true,
  bottomSeparator: true,
  title: {
    mainTitle: 'Our vision',
  },
  columns: [
    {
      position: 'left',
      img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/flourishing-lives.svg?la=en&hash=DD759D33B5718C998054C69B8E44BF39',
      title: 'Flourishing lives',
      subtitle: 'We will enable flourishing lives.',
    },
    {
      position: 'center',
      img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/thriving-communities.svg?la=en&hash=F9F56F7A509F45A5A36FD752E32539F2',
      title: 'Thriving communities',
      subtitle: 'We will foster thriving communities.',
    },
    {
      position: 'right',
      img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/ethical-future.ash',
      title: 'Ethical future',
      subtitle: 'We will build an ethical future.',
    },
  ],
  cta: { text: 'Find out more', url: 'https://www.acu.edu.au/' },
};

export const secondary = {
  topSeparator: true,
  bottomSeparator: true,
  title: {
    mainTitle: 'Our vision',
    subtitle:
      'Vision 2033 will inform the development of cross-institutional plans across three impact phases.',
    cta: { text: 'Find out more', url: 'https://www.acu.edu.au/' },
  },
  columns: [
    {
      position: 'left',
      img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/no1.svg?la=en&hash=DA27CEB4E81DB1936D173757A2C09ACE',
      title: 'Impact phase 1',
      titleBold: true,
      subtitle: '(2024-2026)',
      subtitleBold: true,
    },
    {
      position: 'center',
      img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/no2.svg?la=en&hash=EA9A3F9D33219D561F072B8D7F490648',
      title: 'Impact phase 2',
      titleBold: true,
      subtitle: '(2027-2029)',
      subtitleBold: true,
    },
    {
      position: 'right',
      img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/no3.svg?la=en&hash=2E1A0A367F8BAF42FD67A4BE6C967A52',
      title: 'Impact phase 3',
      titleBold: true,
      subtitle: '(2030-2033)',
      subtitleBold: true,
    },
  ],
};

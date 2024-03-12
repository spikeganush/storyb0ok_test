import { TwoClWith3ClRightProps } from './TwoClWith3ClRight';

export const primary: TwoClWith3ClRightProps = {
  topSeparator: true,
  bottomSeparator: true,
  left: {
    img: 'https://via.placeholder.com/100',
    imgAlt: 'placeholder',
    title: 'Title',
    subTitle: 'Subtitle',
    content: 'Content',
  },
  right: {
    img: 'https://via.placeholder.com/100',
    imgAlt: 'placeholder',
    title: 'Title',
    content: [
      {
        title: 'Title',
        content: 'Content',
      },
      {
        title: 'Title',
        content: 'Content',
      },
      {
        title: 'Title',
        content: 'Content',
      },
    ],
  },
};

export const primaryWithExample: TwoClWith3ClRightProps = {
  topSeparator: true,
  bottomSeparator: true,
  left: {
    img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/our-mission-01.svg?la=en&hash=E5E53964CD8DB3B3294DCC9E38249798',
    imgAlt: 'icon of up facing Hands clasped together',
    title: 'Our mission',
    subTitle: 'In truth and love.',
    content:
      'Within the Catholic intellectual tradition and acting in truth and love, Australian Catholic University is committed to the pursuit of knowledge, the dignity of the human person and the common good.',
  },
  right: {
    img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/our-values-01.svg?la=en&hash=E68FC51C28001EE116E45D76E55E7A89',
    imgAlt: 'icon of three people standing together',
    title: 'Our values',
    content: [
      {
        title: 'Truth',
        content: 'ACU is a place where faith and reason are explored in search of truth.',
      },
      {
        title: 'Excellence',
        content:
          'The pursuit of excellence underpins our efforts in teaching, research and engagement.',
      },
      {
        title: 'Service',
        content:
          'ACU is a university of service. We seek to improve the lives of others through compassion, empathy and respect.',
      },
    ],
  },
};

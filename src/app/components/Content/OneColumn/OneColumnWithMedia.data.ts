import { TOneColumnWithImageProps } from './OneColumnWithMedia';

export const leftExampleData: TOneColumnWithImageProps = {
  media: {
    mediaType: 'image',
    src: 'https://www.acu.edu.au/-/media/feature/pagecontent/imagewithrichtext/1up-placeholder-600x650/studyatacu_body-image-1_600x650.jpg?h=650&w=600&la=en&hash=0ACE190B6F81E03CA1812D5FEB34340E',
    alt: 'Student talking on a picnic table outside the library at the Melbourne campus',
  },
  title: 'Begin your future',
  paragraphs: [
    'Your future is just a couple of clicks away. Search our list of courses and start our easy application process.',
  ],
  subParts: [
    {
      title: 'Find your course',
      paragraphs: [
        'From saving lives to educating future leaders, we have a course to suit you. You can enrol in everything from undergraduate degrees and doctoral courses to single units and professional education short courses.',
      ],
      link: {
        url: 'https://www.acu.edu.au/study-at-acu/find-a-course',
        text: 'Search our courses',
      },
    },
    {
      title: 'How to apply',
      paragraphs: [
        "Applying for courses can be daunting, so we've streamlined the process to get your started and finished as quickly as possible. Follow our step-by-step guides to apply for your chosen courses.",
      ],
      link: {
        url: 'https://www.acu.edu.au/study-at-acu/how-to-apply',
        text: 'Apply today',
      },
    },
  ],
};

import { TAskAcuProps } from './AskAcu';

export const PrimaryData: TAskAcuProps = {
  leftColumn: {
    title: 'Have a question?',
    paragraphs: [
      {
        text: 'We’re available 9am–5pm AEDT, ',
      },
      {
        text: 'Monday to Friday',
        customStyle: 'mb-4',
      },
      {
        text: 'If you’ve got a question, our AskACU team has you covered. You can search FAQs, text us, email, live chat, call – whatever works for you.',
      },
    ],
  },
  columns: [
    {
      icon: 'chat-bubble-2',
      title: 'Live chat with us now',
      description: ['Chat to our team for real-time', 'answers to your questions.'],
      link: {
        url: 'https://acu.service-now.com/askacu',
        text: 'Launch live chat',
      },
    },
    {
      icon: 'question-mark',
      title: 'Visit our FAQs page',
      description: ['Find answers to some commonly', 'asked questions.'],
      link: {
        url: 'https://acu.service-now.com/askacu',
        text: 'See our FAQs',
      },
    },
  ],
  contactColumns: [
    {
      link: {
        url: 'https://acu.service-now.com/askacu',
        text: 'Ask a question',
      },
    },
    {
      title: 'Call ',
      link: {
        url: 'tel:1300 275 228',
        text: '1300 275 228',
      },
    },
  ],
};

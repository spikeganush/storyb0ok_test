import type { Meta, StoryObj } from '@storybook/react';
import  Accordion  from './Accordions';
 
// Example data for the Accordion
const accordionData = 
  {
    leftPart: {
      img: 'https://uat.vision2033.acu.edu.au/-/media/vision2023/img/our-foundations.svg?la=en&hash=32B4136B4D9BDAE331F4A054CDB4316E',
      title: "Our foundations",
      subtitle: "Strong foundations support our mission and ensure that we achieve Vision 2033.",
    },
    accordions: [
      {
        img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/holistic-education-01.svg?la=en&hash=DBB7B793925E6E8116BCC6A4D91E2212',
        title: "Holistic Education",
        subtitle: "Education is at the heart of a flourishing life.",
        paragraphs: [
          {
            text: `At ACU, we welcome people of all faiths, or no faith, to study with us. Students are offered a personalised learning journey that encourages critical thinking, ethical awareness and a strong sense of social responsibility. This not only prepares them for their professional careers, but for a fulfilling and purposeful life.`,
            bold: true,
          },
          {
            text: `We address educational disadvantage by ensuring that those from low socioeconomic and
            diverse
            backgrounds have equitable access to higher education. We support students in
            transitioning to
            higher education through tailored pathways and flexible learning options.`
          },
          {
            text: `Our teaching and learning respects Aboriginal and Torres Strait Islander knowledges and cultures.`
          }, 
          {
            text: `Our curriculum is distinctive, innovative and student-centred, while our environments
            are
            safe,
            supportive, inclusive and technologically enriched. We provide both physical and
            digital
            learning
            environments to increase student choice and engagement.`
          }, 
          {
            text: `We facilitate student transition into employment by providing opportunities that will
            prepare them
            for the future of work. This means including innovation, entrepreneurship, digital
            capability and
            work-integrated learning experiences in our courses and programs.`
          }
        ],
      },
      {
        img: 'https://uat.vision2033.acu.edu.au/-/media/vision2023/icons/collaborative-engagement-01.svg?la=en&hash=625D7A7C79B0184E2AF47070C549A793',
        title: "Collaborative Engagement",
        subtitle: "Collaboration fosters innovation.",
        paragraphs: [
        {
          bold: true,
          text: `Recognising the transformative power of collaboration, ACU is committed to actively
          engaging with partners from various domains. `
        },
        {
          text: `We engage in academic collaboration to increase cross-disciplinary engagement and build strategic partnerships with local, national and international institutions. This encourages knowledge exchange and contributes to the development of dynamic educational and research initiatives. `
        }, {
          text: `We respect the importance of autonomy and decision making as a central pillar of healthy social partnerships. We assist communities in actively shaping initiatives that directly impact them, thereby ensuring a more sustainable and inclusive model of social development. Collaboration with external partners, both locally and globally, enables the exchange of knowledge and skills to maximise problem solving. Bringing people together from different backgrounds to share ideas and incorporate diverse perspectives enhances capacity and results in the development of innovative solutions to complex problems.`
        }
      ],
      },
      {
        img: 'https://uat.vision2033.acu.edu.au/-/media/vision2023/icons/research-01.svg?la=en&hash=66B358C06DC014A969F49D422CA46F9B',
        title: "High-impact Research",
        subtitle: "Ethically informed research delivers positive change.",
        paragraphs: [
          {
            bold: true,
            text: `ACU develops innovative solutions to issues impacting human dignity and the common good. Through faith and reason, we seek truth and build a greater understanding of people and the world in which we live.`
          },
          {
            text: `Our research and enterprise activities embrace the full life cycle of research, from knowledge creation to its translation and application towards outcomes of social, cultural and economic benefit. We build links between our research institutes, centres and faculties to create research translation networks and achieve impact across ACU, industry, community and government.`
          },
          {
            text: `Our approach provides ACU students with greater exposure to research and enables the development of research-informed curricula. We offer exciting opportunities for higher degree research students, including joint programs with industry, government and our international partners.`
          }
        ],
      },
    ],
  };

const meta = {
    title: 'Example/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;
    
export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
    args: {
        leftPart: accordionData.leftPart,
        accordions: accordionData.accordions,
    },
};

import Accordion from './Accordions';
import LeftPart from './LeftPart';
import { TAccordionsProps } from './type';

const AccordionsWithLeftColumn = (props: TAccordionsProps) => {
  return (
    <section className='accordion container mx-auto'>
      <div className=' px-4 flex flex-col sm:flex-row gap-12 text-gray-700'>
        <LeftPart {...props.leftPart!} />
        <Accordion {...props} />
      </div>
    </section>
  );
};

export default AccordionsWithLeftColumn;

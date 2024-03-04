import Accordion from './Accordion';
import { TAccordionsProps } from './type';

const Accordions = (props: TAccordionsProps) => {
  return (
    <div className='flex-1 sm:flex-[4]'>
      {props.accordions.map((accordion, index) => (
        <Accordion
          key={index}
          accordion={accordion}
          leftPart={props.leftPart}
        />
      ))}
    </div>
  );
};

export default Accordions;

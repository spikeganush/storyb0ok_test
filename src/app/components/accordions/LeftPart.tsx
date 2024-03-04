import Image from 'next/image';
import React, { useState } from 'react';
import { TLeftPart } from './type';

const LeftPart = (props: TLeftPart) => {
  const { title, subtitle, img } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className='left__accordion-part flex-1'>
        <h2 className='text-acu-purple-100 text-4xl font-bold mb-3'>{title}</h2>
        <p className='font-miller text-xl max-w-[45ch] sm:max-w-[18ch]'>
          {subtitle}
        </p>
        {img && (
          <Image
            src={img}
            alt='Our foundations chart is a circular chart with 3 rings circulating around a centred circle with the word ‘Mission’ prominent in gold on a white background. The first inner ring has the following terms on a warm red background: ‘Flourishing lives’, ‘Thriving communities’ and ‘Ethical future’. The second ring has the following terms on a cool purple background: ‘Partners’, ‘People’, ‘Culture’, ‘Infrastructure’. The tertiary and outer ring has the following terms in a dark colour on a light creamy brown background: ‘Holistic education’, ‘Collaborative engagement’, ‘High-impact research’, and ‘Global connection’.'
            width={288}
            height={288}
            className='mt-6 cursor-pointer w-[300px] sm:w-full aspect-square'
            onClick={() => setIsModalOpen(true)}
          />
        )}
      </div>
      {img && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
            isModalOpen
              ? 'opacity-0 sm:opacity-100'
              : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsModalOpen(false)}
        >
          <div className='fixed inset-0 flex justify-center items-center'>
            <Image
              src={img}
              alt='Our foundations chart is a circular chart with 3 rings circulating around a centred circle with the word ‘Mission’ prominent in gold on a white background. The first inner ring has the following terms on a warm red background: ‘Flourishing lives’, ‘Thriving communities’ and ‘Ethical future’. The second ring has the following terms on a cool purple background: ‘Partners’, ‘People’, ‘Culture’, ‘Infrastructure’. The tertiary and outer ring has the following terms in a dark colour on a light creamy brown background: ‘Holistic education’, ‘Collaborative engagement’, ‘High-impact research’, and ‘Global connection’.'
              width={700}
              height={700}
              className='cursor-pointer bg-white rounded-2xl p-2 w-[700px] h-[700px] object-cover object-center'
              onClick={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LeftPart;

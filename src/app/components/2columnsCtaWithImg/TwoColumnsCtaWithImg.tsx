import Image from 'next/image';
import React from 'react';
import ButtonCTA from '../Buttons/CTA';

export type TwoColumnsCtaWithImgProps = {
  /** The URL of the image */
  imageUrl: string;
  /** The title of the section */
  title: string;
  /** The color of the title */
  titleColor?: string;
  /** The description of the section */
  description: string;
  /** The color of the description */
  descriptionColor?: string;
  /** The URL of the CTA button */
  ctaUrl: string;
  /** The text of the CTA button */
  ctaText: string;
};

const TwoColumnsCtaWithImg = ({
  imageUrl,
  title,
  titleColor,
  description,
  descriptionColor,
  ctaUrl,
  ctaText,
}: TwoColumnsCtaWithImgProps) => {
  return (
    <div className="w-full px-5">
      {/* if top bar divider is needed, change pb-5 to space-y-5 and vice-versa */}
      <div className={`relative flex flex-col space-x-0 pt-7 md:flex-row`}>
        {/* Uncomment next line to add the top bar divider */}
        {/* <div className="bar-divider-h__top extra-padding">&nbsp;</div> */}
        <div className="w-full md:w-1/2">
          {/* Change the image URL to the correct one */}
          <Image
            alt="Decoration image"
            src={imageUrl}
            className="w-full"
            width={640}
            height={400}
          />
        </div>
        <div
          className="h-full w-full bg-gray-100 p-4 md:w-1/2 md:p-10"
          style={{
            clipPath: 'polygon(100% 0, 100% calc(100% - 3rem), calc(100% - 3rem) 100%, 0 100%, 0 0',
          }}
        >
          <h1 className={`mb-4 text-5xl font-bold text-acu-purple-100 ${titleColor}`}>{title}</h1>
          <p className={`w-4/5 font-semibold text-acu-black-80 ${descriptionColor}`}>
            {description}
          </p>
          <ButtonCTA text={ctaText} url={ctaUrl} />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnsCtaWithImg;

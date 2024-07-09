export type TwoColumnsCtaWithImgProps = {
  /** The top line seperator is visible or not
   * @default true
   */
  topSeparator?: boolean;
  /** The bottom line seperator is visible or not
   * @default true
   */
  bottomSeparator?: boolean;
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

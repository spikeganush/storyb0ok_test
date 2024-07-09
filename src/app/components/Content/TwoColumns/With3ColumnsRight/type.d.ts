export type RightContent = {
  /** The title of the content */
  title: string;
  /** The content */
  content: string;
};

export type TwoClWith3ClRightProps = {
  /** The top line seperator is visible or not
   * @default true
   */
  topSeparator?: boolean;
  /** The bottom line seperator is visible or not
   * @default true
   */
  bottomSeparator?: boolean;
  /** The left content */
  left: {
    /** The URL of the image */
    img: string;
    /** The alt text of the image */
    imgAlt: string;
    /** The title of the section */
    title: string;
    /** The color of the title */
    titleColor?: string;
    /** The subtitle of the section */
    subTitle: string;
    /** The color of the subtitle */
    subTitleColor?: string;
    /** The content of the section */
    content: string;
    /** The color of the content */
    contentColor?: string;
  };
  /** The right content */
  right: {
    /** The URL of the image */
    img: string;
    /** The alt text of the image */
    imgAlt: string;
    /** The title of the section */
    title: string;
    /** The color of the title */
    titleColor?: string;
    /** The color of the content title */
    contentTitleColor?: string;
    /** The color of the content */
    contentColor?: string;
    /** The content */
    content: [RightContent, RightContent, RightContent];
  };
};

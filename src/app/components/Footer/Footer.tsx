import React from 'react';
import FooterLinksCol from './FooterLinksCol';
import FooterConnect from './FooterConnect';
import { TLink } from '@/app/utils/helper';
import FooterLinkImage from './FooterLinkImage';

export type TFooterColumns = {
  title?: string;
  links: TLink[];
};

export type TFooterConnect = {
  title?: string;
  links: {
    icon: string;
    url: string;
  }[];
};

export type TFooterRightColLinkImage = {
  title: string;
  url: string;
  image: {
    url: string;
    alt: string;
  };
};

export type TFooterProps = {
  leftColumn?: TFooterColumns;
  centerColumn?: TFooterColumns;
  rightColumn: {
    connect: TFooterConnect;
    question: TFooterRightColLinkImage;
    online: TFooterRightColLinkImage;
  };
  quickLinks: TLink[];
  copyRight: string;
  aknowledgement: string;
};

const Footer = ({
  leftColumn,
  centerColumn,
  rightColumn,
  quickLinks,
  copyRight,
  aknowledgement,
}: TFooterProps) => {
  return (
    <footer>
      <div className="flex">
        <div className="left min-[992px]:w-1/4">
          {leftColumn && <FooterLinksCol title={leftColumn.title} links={leftColumn.links} />}
        </div>
        <div className="center min-[992px]:w-1/3">
          {centerColumn && <FooterLinksCol title={centerColumn.title} links={centerColumn.links} />}
        </div>
        <div className="right min-[992px]:w-5/12">
          <div className="flex-1">
            {rightColumn?.connect && <FooterConnect connect={rightColumn.connect} />}
            {rightColumn?.online && <FooterLinkImage {...rightColumn.online} />}
          </div>
          <div className="flex-1">
            {rightColumn?.question && <FooterLinkImage {...rightColumn.question} />}
          </div>
        </div>
      </div>
      <div className="mt-12 flex">
        <div className="w-full min-[992px]:w-5/12">
          {quickLinks && (
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    data-track-label={link.text}
                    data-track-category="footer"
                    data-track-action="navigation"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-full min-[992px]:w-7/12"></div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import FooterLinksCol from './FooterLinksCol';
import FooterConnect from './FooterConnect';
import { TLink } from '@/app/utils/helper';
import FooterLinkImage from './FooterLinkImage';

export type TFooterColumns = {
  title?: string;
  links: TLink[];
  length?: number;
};

export type TFooterConnect = {
  title?: string;
  links: {
    icon: 'facebook' | 'twitter' | 'linkedin' | 'youtube' | 'instagram' | 'tiktok';
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
  centerColumn?: TFooterColumns & { length?: number };
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
    <footer className="mx-auto max-w-[1170px]">
      <div className="flex">
        <div className="left min-[992px]:w-1/4">
          {leftColumn && <FooterLinksCol title={leftColumn.title} links={leftColumn.links} />}
        </div>
        <div className="center min-[992px]:w-1/3">
          {centerColumn && (
            <FooterLinksCol
              title={centerColumn.title}
              links={centerColumn.links}
              length={centerColumn.length || leftColumn?.links.length}
            />
          )}
        </div>
        <div className="right flex flex-col min-[992px]:w-5/12">
          <div className="flex flex-1 justify-between">
            {rightColumn?.connect && <FooterConnect connect={rightColumn.connect} />}
            {rightColumn?.question && <FooterLinkImage {...rightColumn.question} />}
          </div>
          <div className="flex-1 justify-items-end">
            {rightColumn?.online && <FooterLinkImage {...rightColumn.online} />}
          </div>
        </div>
      </div>
      <div className="mt-12 flex">
        <div className="w-full min-[992px]:w-5/12">
          {quickLinks && (
            <ul className="flex gap-5 text-sm font-medium text-acu-purple-100">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    data-track-label={link.text}
                    data-track-category="footer"
                    data-track-action="navigation"
                    className="underline hover:no-underline"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-full min-[992px]:w-7/12">
          {copyRight && (
            <p className="text-sm font-medium text-acu-purple-100">
              <a href="https://www.acu.edu.au/copyright" className="no-underline hover:underline">
                Copyright{' '}
              </a>
              {copyRight}
            </p>
          )}
        </div>
      </div>
      <div className="mt-8 w-full">
        {aknowledgement && (
          <p className="text-sm font-medium text-acu-purple-100">{aknowledgement}</p>
        )}
      </div>
    </footer>
  );
};

export default Footer;

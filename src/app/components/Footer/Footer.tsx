import React from 'react';
import FooterLinksCol from './FooterLinksCol';
import FooterConnect from './FooterConnect';
import { cn, TLink } from '@/app/utils/helper';
import FooterLinkImage from './FooterLinkImage';

export type TFooterColumns = {
  title?: string;
  links: TLink[];
  length?: number;
  version?: TFooterProps['version'];
};

export type TFooterConnect = {
  version?: TFooterProps['version'];
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
  version?: TFooterProps['version'];
};

export type TFooterProps = {
  version?: 'purple' | 'sand' | 'grey';
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
  version = 'grey',
  leftColumn,
  centerColumn,
  rightColumn,
  quickLinks,
  copyRight,
  aknowledgement,
}: TFooterProps) => {
  return (
    <footer
      className={cn('mx-auto mt-20 max-w-[1170px] bg-acu-black-15 p-8', {
        'bg-acu-purple-120': version === 'purple',
        'bg-acu-sand': version === 'sand',
      })}
    >
      <div className="flex flex-col gap-y-10 md:flex-row md:gap-y-0">
        <div className="left flex-1 min-[992px]:flex-[3]">
          {leftColumn && (
            <FooterLinksCol title={leftColumn.title} links={leftColumn.links} version={version} />
          )}
        </div>
        <div className="center flex-1 min-[992px]:flex-[4]">
          {centerColumn && (
            <FooterLinksCol
              title={centerColumn.title}
              links={centerColumn.links}
              length={centerColumn.length || leftColumn?.links.length}
              version={version}
            />
          )}
        </div>
        <div className="right flex flex-1 flex-col max-[992px]:gap-y-10 min-[992px]:flex-[5]">
          <div className="flex flex-1 flex-col justify-between max-[992px]:gap-y-10 min-[992px]:flex-row">
            {rightColumn?.connect && (
              <FooterConnect connect={rightColumn.connect} version={version} />
            )}
            {rightColumn?.question && (
              <FooterLinkImage {...rightColumn.question} version={version} />
            )}
          </div>
          <div className="flex-1 justify-items-end">
            {rightColumn?.online && <FooterLinkImage {...rightColumn.online} version={version} />}
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col min-[992px]:flex-row">
        <div className="flex-1 min-[992px]:flex-[5]">
          {quickLinks && (
            <ul
              className={cn('flex flex-wrap gap-5 text-sm font-medium text-acu-purple-100', {
                'text-acu-purple-20': version === 'purple',
              })}
            >
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
        <div className="mt-4 flex-1 min-[992px]:mt-0 min-[992px]:flex-[7]">
          {copyRight && (
            <p
              className={cn('text-sm font-medium text-acu-purple-100', {
                'text-acu-purple-20': version === 'purple',
              })}
            >
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
          <p
            className={cn('text-sm font-medium text-acu-purple-100', {
              'text-acu-purple-20': version === 'purple',
            })}
          >
            {aknowledgement}
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;

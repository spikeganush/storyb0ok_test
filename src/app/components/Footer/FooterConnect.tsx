import React from 'react';
import { TFooterConnect } from './Footer';
import { cn } from '@/app/utils/helper';

const FooterConnect = ({ connect }: { connect: TFooterConnect }) => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-acu-purple-100">{connect.title}</h2>
      <ul className="flex text-acu-purple-100">
        {connect.links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              className={cn(
                'mr-4 no-underline opacity-100 duration-300 hover:underline hover:opacity-50',
                {
                  'icon-facebook-acu': link.icon === 'facebook',
                  'icon-twitter-acu': link.icon === 'twitter',
                  'icon-linkedin-acu': link.icon === 'linkedin',
                  'icon-youtube-acu': link.icon === 'youtube',
                  'icon-instagram': link.icon === 'instagram',
                  'icon-tiktok-icon': link.icon === 'tiktok',
                },
              )}
            ></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterConnect;

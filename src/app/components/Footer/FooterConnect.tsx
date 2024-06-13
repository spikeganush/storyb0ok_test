import React from 'react';
import { TFooterConnect } from './Footer';

const FooterConnect = ({ connect }: { connect: TFooterConnect }) => {
  return (
    <div>
      <h2>{connect.title}</h2>
      <ul className="flex">
        {connect.links.map((link, index) => (
          <li key={index}>
            <a href={link.url}></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterConnect;

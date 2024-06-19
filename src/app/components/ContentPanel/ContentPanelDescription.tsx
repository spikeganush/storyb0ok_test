import React from 'react';

const ContentPanelDescription = () => {
  return (
    <div className="sb-unstyled rounded-lg bg-acu-black-15 px-5 py-4 text-acu-charcoal-120">
      <p className="mb-4 text-lg">
        The Contact panel is a page-wide panel that promotes contact information in a clear and easy
        to follow format at the bottom (above the ACU footer) of every page specific to a section or
        website.
      </p>
      <p className="mt-8">
        <h2 className="border-b-0 text-2xl font-bold text-acu-purple-100">Best practice</h2>
        <ul className="ml-8 list-disc">
          <li>
            Use Contact panel on sites or site sections where contact information is an important
            part of the section&apos;s service (e.g. AskACU, International, Research Institutes).
            Otherwise use the &lsquo;Key facts&rsquo; UI.
          </li>
          <li>
            Place contact information in a clear order of priority. For example, if users are likely
            to want to ring first, place the phone number in a prominante position.
          </li>
        </ul>
      </p>
      <p className="mt-8">
        <h2 className="border-b-0 text-2xl font-bold text-acu-purple-100">Usage</h2>
        <p>
          Use Contact panel on sites or site sections where contact information is an important part
          of the section&apos;s service (e.g. AskACU, Service Central, International). Otherwise use
          the &lsquo;Key facts&rsquo; UI.
        </p>
      </p>
    </div>
  );
};

export default ContentPanelDescription;

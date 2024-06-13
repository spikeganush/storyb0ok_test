import React from 'react';
import { TAskAcuVersion, TContactColumnProps } from './AskAcu';
import { cn } from '@/app/utils/helper';

const AskAcuRightColContact = ({
  contactColumns,
  version,
}: {
  contactColumns: TContactColumnProps[];
  version: TAskAcuVersion;
}) => {
  return (
    <>
      {contactColumns?.length > 0 && (
        <div
          className={cn(
            'mt-8 flex flex-col justify-between border-t-[1px] border-acu-purple-80 pt-8 min-[560px]:mt-12 min-[560px]:flex-row min-[560px]:pt-12',
            {
              'border-acu-black-40': version === 'sand',
            },
          )}
        >
          {contactColumns.map((contact, index) => {
            const onlyTwo = contactColumns.length === 2;
            return (
              <>
                <div
                  className="mt-4 inline-block flex-1 font-semibold first-of-type:mt-0 min-[560px]:mt-0"
                  key={index}
                >
                  {contact.icon && (
                    <span
                      className={cn('mr-4 text-[1.6rem]', {
                        'icon-call': contact.icon === 'phone',
                        'icon-mail': contact.icon === 'email',
                        'text-acu-purple-100': version === 'sand',
                        'text-acu-red-120': version === 'grey',
                      })}
                    />
                  )}
                  {contact.title && <h3 className="inline">{contact.title}</h3>}
                  <a
                    href={contact.link.url}
                    className={cn('text-acu-purple-20', {
                      'acu-focus-white': version === 'purple',
                      'acu-focus text-acu-charcoal-120': version !== 'purple',
                    })}
                  >
                    {contact.link.text}
                  </a>
                </div>
                {onlyTwo && index === 0 && <div className="flex-1" key={`useless${index}`} />}
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default AskAcuRightColContact;

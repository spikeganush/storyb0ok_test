import { CalendarEvent } from '@/utils/eventGenerator';
import { cn } from '@/utils/helper';
import React from 'react';

type EventsProps = {
  events: CalendarEvent[];
};

const EventList: React.FC<EventsProps> = ({ events }) => {
  const displayedEvents = events.slice(0, 2);
  const hasMoreEvents = events.length > 2;

  return (
    <>
      <ul className="mt-1 flex justify-center gap-[2px] text-left md:mt-2 md:block md:gap-0">
        {displayedEvents.map((event) => (
          <li
            key={event.id}
            className={cn(
              'flex items-center text-xs text-black md:mb-2 md:ml-2 md:bg-acu-black-30 md:px-3 md:py-1'
            )}
            title={event.title}
          >
            <span
              className={cn('h-[5px] w-[5px] rounded-full md:mr-2 md:h-2 md:w-2', {
                [event.color]: event.color,
              })}
            ></span>
            <span className="hidden truncate text-nowrap md:block  md:max-w-[calc(100%-1rem)]">
              {event.title}
            </span>
          </li>
        ))}
      </ul>
      {hasMoreEvents && (
        <div className={cn('flex items-center text-xs text-black md:mb-2 md:ml-2 md:px-3 md:py-1')}>
          <span className="hidden md:block">more...</span>
          <span className="block leading-none md:hidden">...</span>
        </div>
      )}
    </>
  );
};

export default EventList;

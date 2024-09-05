import { CalendarEvent } from '@/app/utils/eventGenerator';
import { cn } from '@/app/utils/helper';
import React from 'react';

type EventsProps = {
  events: CalendarEvent[];
};

const EventList: React.FC<EventsProps> = ({ events }) => {
  const displayedEvents = events.slice(0, 2);
  const hasMoreEvents = events.length > 2;

  return (
    <>
      <ul className="mt-2 text-left">
        {displayedEvents.map((event) => (
          <li
            key={event.id}
            className={cn(
              'mb-2 ml-2 flex items-center truncate bg-acu-black-30 px-3 py-1 text-xs text-black',
            )}
            title={event.title}
          >
            <span
              className={cn('mr-2 h-2 w-2 rounded-full', {
                [event.color]: event.color,
              })}
            ></span>
            <span>{event.title}</span>
          </li>
        ))}
      </ul>
      {hasMoreEvents && (
        <div className={cn('mb-2 ml-2 flex items-center truncate px-3 py-1 text-xs text-black')}>
          <span>more...</span>
        </div>
      )}
    </>
  );
};

export default EventList;

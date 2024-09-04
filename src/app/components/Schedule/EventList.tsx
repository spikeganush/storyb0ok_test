import { CalendarEvent } from '@/app/utils/eventGenerator';
import { cn } from '@/app/utils/helper';
import React from 'react';

type EventsProps = {
  events: CalendarEvent[];
};

const EventList: React.FC<EventsProps> = ({ events }) => {
  return (
    <ul className="mt-2 text-left">
      {events.map((event, index) => (
        <li
          key={event.id}
          className={cn(
            'ml-2 flex items-center truncate bg-acu-black-30 px-3 py-1 text-xs text-black',
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
  );
};

export default EventList;

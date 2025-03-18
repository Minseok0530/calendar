import FullCalender from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function CalenderComponent() {
  return (
    <div className="w-full">
      <FullCalender plugins={[dayGridPlugin]} />
    </div>
  );
}

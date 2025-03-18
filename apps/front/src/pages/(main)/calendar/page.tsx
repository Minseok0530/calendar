import { Button, SegmentedControl } from '@radix-ui/themes';
import CalenderComponent from '../../../components/calender-component';
import { useState } from 'react';
import { PlusIcon } from '@radix-ui/react-icons';
import dayjs, { Dayjs } from 'dayjs';
import Clock from '../../../components/clock';

function ListBoxComponent({
  eventLocation,
  eventName,
  eventTime,
}: {
  eventTime: Dayjs;
  eventName: string;
  eventLocation: string;
}) {
  return (
    <div
      className="flex flex-col border p-2 mt-2 rounded-sm"
      onClick={() => {
        console.log('click events List Component');
      }}
    >
      <div>{eventName}</div>
      <div>{eventTime.format('YYYY-MM-DD')}</div>
      <div>{eventLocation}</div>
    </div>
  );
}

export default function Calender() {
  const [currentSelect, setCurrentSelect] = useState<'today' | 'week'>('today');
  const [eventData, setEventData] = useState<
    { name: string; location: string; value: string }[]
  >([]);

  return (
    <div className="w-full">
      <div className="flex">
        <CalenderComponent />
        <div className="border my-2 mx-2 w-[20%] p-2">
          <Clock />
          <Button style={{ width: '100%', backgroundColor: 'black' }}>
            <PlusIcon />새 일정
          </Button>
          <div className="flex flex-col mt-5">
            <SegmentedControl.Root
              defaultValue={currentSelect}
              size="3"
              onValueChange={(event) => {
                if (event === 'today' || event === 'week')
                  setCurrentSelect(event);
              }}
            >
              <SegmentedControl.Item value="today">당일</SegmentedControl.Item>
              <SegmentedControl.Item value="week">
                예정된 일정
              </SegmentedControl.Item>
            </SegmentedControl.Root>
          </div>
          <div className="mt-5">
            {[
              { locate: '위치 1', name: '이름 1' },
              { locate: '위치 2', name: '이름 2' },
            ].map((o) => {
              return (
                <ListBoxComponent
                  eventLocation={o.locate}
                  eventName={o.name}
                  eventTime={dayjs()}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

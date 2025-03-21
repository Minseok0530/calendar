import FullCalender from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AlertDialog } from '@radix-ui/themes';
import { useState } from 'react';
import { Cross1Icon } from '@radix-ui/react-icons';
import 'dayjs/locale/ko';

export default function CalenderComponent() {
  const [isOpenDialog, setIsOpenDialog] = useState(true);
  return (
    <div className="w-full">
      <AlertDialog.Root open={isOpenDialog} onOpenChange={setIsOpenDialog}>
        <AlertDialog.Content maxWidth="80%">
          <AlertDialog.Title>
            <div className="w-full flex justify-between">
              <div>20XX년-XX월-XX일</div>
              <Cross1Icon
                className="cursor-pointer"
                onClick={() => {
                  setIsOpenDialog(false);
                }}
              />
            </div>
          </AlertDialog.Title>
          <AlertDialog.Description>
            <div className="w-full">a</div>
          </AlertDialog.Description>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <FullCalender plugins={[dayGridPlugin]} />
    </div>
  );
}

import * as React from 'react';
import { ScrollArea } from '@base-ui-components/react/scroll-area';

export default function ScrollContent({children}: {children: React.ReactNode}) {
  return (
    <ScrollArea.Root className=" w-full h-[calc(100vh-150px)]  lg:h-[calc(100vh-70px)]">
      <ScrollArea.Viewport className="h-full w-full overscroll-contain rounded-md  focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800">
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar className="m-2 flex w-1 justify-center rounded bg-gray-200 opacity-0 transition-opacity delay-300 data-[hovering]:opacity-100 data-[hovering]:delay-0 data-[hovering]:duration-75 data-[scrolling]:opacity-100 data-[scrolling]:delay-0 data-[scrolling]:duration-75">
        <ScrollArea.Thumb className="w-full rounded bg-gray-500" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}

'use client';

import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { Fragment, useState } from 'react';

import { ListItem } from '@/lib/constants';

type Props = {
  list: ListItem[];
  title?: string;
};
const SearchFilter = ({ list, title }: Props) => {
  const [selected, setSelected] = useState(list[0]);

  return (
    <div className="mb-8 w-full font-body text-2xl">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Label className="pl-1 text-xl text-slate-500">
          {title}
        </Listbox.Label>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-orange-100 py-3 pl-4 pr-10 text-left text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
            <span className="block truncate">{selected.title}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-6 w-6 text-slate-600"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-orange-100 text-base shadow ring-1 ring-slate-700 ring-opacity-5 focus:outline-none">
              {list.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none bg-orange-100 py-3 pl-4 pr-4 ${
                      active && 'bg-orange-200'
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate text-2xl ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
export default SearchFilter;

// export default function Example() {
//   const [selected, setSelected] = useState(people[0])

//   return (
//     <div className="fixed top-16 w-72">
//       <Listbox value={selected} onChange={setSelected}>
//         <div className="relative mt-1">
//           <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
//             <span className="block truncate">{selected.name}</span>
//             <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//               <ChevronUpDownIcon
//                 className="h-5 w-5 text-gray-400"
//                 aria-hidden="true"
//               />
//             </span>
//           </Listbox.Button>
//           <Transition
//             as={Fragment}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//               {people.map((person, personIdx) => (
//                 <Listbox.Option
//                   key={personIdx}
//                   className={({ active }) =>
//                     `relative cursor-default select-none py-3 pl-10 pr-4 ${
//                       active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
//                     }`
//                   }
//                   value={person}
//                 >
//                   {({ selected }) => (
//                     <>
//                       <span
//                         className={`block truncate ${
//                           selected ? 'font-medium' : 'font-normal'
//                         }`}
//                       >
//                         {person.name}
//                       </span>
//                       {selected ? (
//                         <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-amber-600">
//                           <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                         </span>
//                       ) : null}
//                     </>
//                   )}
//                 </Listbox.Option>
//               ))}
//             </Listbox.Options>
//           </Transition>
//         </div>
//       </Listbox>
//     </div>
//   )
// }

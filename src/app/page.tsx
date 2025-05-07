'use client';
import { useState } from 'react';
interface IButton {
  name: string;
  action: () => void;
}
export default function Home() {
  const source = [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
  ];
  const arrayAsString = JSON.stringify(source);
  const doubleValue = source.filter((array) => array[0] === array[1]);

  const [display,setDisplay] = useState<number[][]>(source);

  const buttons = [
    { name: 'Sort (ASC)', action: () => {setDisplay(source.sort((a, b) => (a[0]+a[1]) - (b[0]+b[1])))} },
    { name: 'Sort (DESC)', action: () => {setDisplay(source.sort((a, b) => (b[0]+b[1]) - (a[0]+a[1])))} },
    { name: 'Flip', action: () => {setDisplay(display.map((array) => array.reverse()))} },
    { name: 'Reset', action: () => {setDisplay(source)} },
  ];

  return (
    <div className='flex flex-col gap-4 p-8'>
      <div className='bg-blue-500 text-xl text-white p-4 rounded'>
        <h2 className='font-bold mb-2'>Array as String:</h2>
        <pre>{arrayAsString}</pre>
      </div>
      <div className='bg-blue-500 text-xl text-white p-4 rounded'>
        <h2 className='font-bold mb-2'>Double:</h2>
        <pre>{doubleValue.length}</pre>
      </div>
      <div className='bg-blue-500 text-xl text-white p-4 rounded w-max flex gap-3'>
        {display.map((array, index) => (
          <div key={index} className='border-2 border-black p-1.5 flex flex-col'>
            <div>{array[0]}</div>
            <div>-</div>
            <div>{array[1]}</div>
          </div>
        ))}
      </div>
      <div className='bg-blue-500 text-xl text-white p-4 rounded flex gap-3 w-max'>
        {buttons.map((button, index) => (
          <ClientButton key={index} button={button} />
        ))}
      </div>
    </div>
  );
}

function ClientButton({ button }: { button: IButton }) {
  return (
    <button className='bg-blue-900 text-white p-2 rounded hover:bg-gray-600' onClick={button.action}>
      {button.name}
    </button>
  );
}

import React from 'react';
import Image from 'next/image';

const Companies = () => {
  return (
    <div className="flex items-center justify-center text-gray-400 text-2xl font-bold min-h-[11vh]">
      <span className="mr-4">Trusted by:</span>
      <ul className="flex items-center gap-10">
        {[1, 2, 3, 4, 5].map((num) => (
          <li key={num} className="relative w-20 h-20 list-none">
            <Image
              alt="trusted brands"
              src={`/trusted${num}.png`}
              fill
              className="object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Companies;

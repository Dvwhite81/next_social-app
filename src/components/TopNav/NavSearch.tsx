'use client';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

export default function NavSearch() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="relative">
      <div className="relative flex">
        {!isActive && (
          <FaSearch className="absolute left-2 top-3 text-gray-400" />
        )}
        <input
          className="rounded-xl h-fit p-2 focus:outline-none focus:ring-0"
          type="text"
          placeholder={isActive ? 'Search' : '      Search'}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
        {isActive && (
          <AiFillCloseCircle
            className="absolute right-2 top-3 text-gray-400 cursor-pointer"
            onClick={() => setIsActive(false)}
          />
        )}
      </div>
      {isActive && (
        <div className="absolute top-20 -left-12 h-[--main-height] w-72 p-4 rounded-md shadow-[--dark-blue] shadow-lg text-[--dark-blue]">
          <h4>Recent</h4>
          <div className="flex flex-col items-center justify-center h-4/5">
            <p>No recent searches.</p>
          </div>
        </div>
      )}
    </div>
  );
}

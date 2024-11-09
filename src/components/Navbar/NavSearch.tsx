'use client';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

export default function NavSearch() {
  const [isActive, setIsActive] = useState(false);
  return (
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
  );
}

'use client';
import { useState } from 'react';
import { FaChevronDown, FaRegStar } from 'react-icons/fa6';
import { SlPeople } from 'react-icons/sl';
import Logo from './Logo';

export default function LogoDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hasBeenHovered, setHasBeenHovered] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleHover = () => setHasBeenHovered(true);

  return (
    <div className="relative" onMouseEnter={handleHover}>
      <button
        className="group flex items-center gap-2 p-2 hover:scale-110  hover:text-white"
        type="button"
        onClick={toggleDropdown}
      >
        <Logo />
        {hasBeenHovered && (
          <FaChevronDown className="text-white group-hover:text-[--light-blue]" />
        )}
      </button>
      {dropdownOpen && (
        <div className="absolute left-3 top-20 border-solid border-[--dark-blue] border-2 rounded-md">
          <ul>
            <li className="flex w-full px-8 py-2 gap-2 hover:bg-[--light-blue] hover:cursor-pointer">
              <span>Following</span>
              <SlPeople />
            </li>
            <hr className="text-[--dark-blue] border-solid border-t-2 border-[--dark-blue]" />
            <li className="flex w-full px-8 py-2 gap-2 hover:bg-[--light-blue] hover:cursor-pointer">
              <span>Favorites</span>
              <FaRegStar />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

'use client';
import { useState } from 'react';
import { FaChevronDown, FaRegStar } from 'react-icons/fa6';
import { SlPeople } from 'react-icons/sl';
import Logo from './Logo';
import NavDropdownItem from './NavDropdownItem';

export default function LogoDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hasBeenHovered, setHasBeenHovered] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleHover = () => {
    setHasBeenHovered(true);
    setDropdownOpen(true);
  };

  const handleExit = () => {
    setDropdownOpen(false);
  };

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleExit}>
      <button
        className="group flex h-[--nav-height] items-center gap-2 p-2 hover:scale-125  hover:text-white"
        type="button"
        onClick={toggleDropdown}
      >
        <Logo />
        {hasBeenHovered && (
          <FaChevronDown className="text-white group-hover:text-[--light-blue]" />
        )}
      </button>
      {dropdownOpen && (
        <>
          <div className="h-2" />
          <div className="border-solid border-[--dark-blue] border-2 rounded-md">
            <ul>
              <NavDropdownItem label="Following" Icon={SlPeople} />
              <hr className="text-[--dark-blue] border-solid border-t-2 border-[--dark-blue]" />
              <NavDropdownItem label="Favorites" Icon={FaRegStar} />
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

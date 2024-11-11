'use client';
import { SIDE_ICONS } from '@/utils/data';
import SideIconList from './SideIconList';
import { useState } from 'react';
import SideLogo from './SideLogo';

export default function SideNav() {
  const [activeIcon, setActiveIcon] = useState(SIDE_ICONS[0]);
  const [newPostIsOpen, setNewPostIsOpen] = useState(false);

  return (
    <aside className="fixed hidden md:flex flex-col h-full w-[10vw] lg:w-[25vw] bg-[--dark-blue] pt-4">
      <SideLogo />
      <div className="h-[2rem]" />
      <SideIconList
        icons={SIDE_ICONS}
        activeIcon={activeIcon}
        setActiveIcon={setActiveIcon}
        newPostIsOpen={newPostIsOpen}
        setNewPostIsOpen={setNewPostIsOpen}
      />
    </aside>
  );
}

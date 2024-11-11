'use client';

import { useState } from 'react';
import { NAV_ICONS } from '@/utils/data';
import BottomIconList from './BottomIconList';

export default function BottomNav() {
  const [activeIcon, setActiveIcon] = useState(NAV_ICONS[0]);
  const [newPostIsOpen, setNewPostIsOpen] = useState(false);

  return (
    <footer className="fixed bottom-0 bg-white flex h-[--nav-height] w-full items-center justify-around md:hidden">
      <BottomIconList
        icons={NAV_ICONS}
        activeIcon={activeIcon}
        setActiveIcon={setActiveIcon}
        newPostIsOpen={newPostIsOpen}
        setNewPostIsOpen={setNewPostIsOpen}
      />
    </footer>
  );
}

'use client';

import { useState } from 'react';
import { icons } from '@/utils';
import NavIcon from './NavIcon';

export default function BottomNav() {
  const [activeIcon, setActiveIcon] = useState(icons[0]);
  const [newPostIsOpen, setNewPostIsOpen] = useState(false);

  return (
    <footer className="fixed bottom-0 bg-white flex h-[--nav-height] w-full items-center justify-around">
      {icons.map((icon) => (
        <NavIcon
          key={icon.label}
          icon={icon}
          isActive={activeIcon.label === icon.label}
          setActiveIcon={setActiveIcon}
          newPostIsOpen={newPostIsOpen}
          setNewPostIsOpen={setNewPostIsOpen}
        />
      ))}
    </footer>
  );
}

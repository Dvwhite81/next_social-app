import { NavIconType } from '@/utils/types';
import SideIcon from './SideIcon';

type SideIconListProps = {
  icons: NavIconType[];
  activeIcon: NavIconType;
  setActiveIcon: (icon: NavIconType) => void;
  newPostIsOpen: boolean;
  setNewPostIsOpen: (value: boolean) => void;
};

export default function SideIconList({
  icons,
  activeIcon,
  setActiveIcon,
  newPostIsOpen,
  setNewPostIsOpen,
}: SideIconListProps) {
  return (
    <div className="flex flex-col h-full justify-evenly">
      {icons.map((icon) => (
        <SideIcon
          key={icon.label}
          icon={icon}
          isActive={activeIcon.label === icon.label}
          setActiveIcon={setActiveIcon}
          newPostIsOpen={newPostIsOpen}
          setNewPostIsOpen={setNewPostIsOpen}
        />
      ))}
    </div>
  );
}

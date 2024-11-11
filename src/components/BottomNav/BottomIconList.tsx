import { NavIconType } from '@/utils/types';
import NavIcon from './NavIcon';

type BottomIconListProps = {
  icons: NavIconType[];
  activeIcon: NavIconType;
  setActiveIcon: (icon: NavIconType) => void;
  newPostIsOpen: boolean;
  setNewPostIsOpen: (value: boolean) => void;
};

export default function BottomIconList({
  icons,
  activeIcon,
  setActiveIcon,
  newPostIsOpen,
  setNewPostIsOpen,
}: BottomIconListProps) {
  return (
    <>
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
    </>
  );
}

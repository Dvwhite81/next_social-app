import { Tooltip } from 'react-tooltip';
import { NavIconType } from '@/utils/types';
import NavDropdownItem from '../TopNav/NavDropdownItem';

type NavIconProps = {
  icon: NavIconType;
  isActive: boolean;
  setActiveIcon: (icon: NavIconType) => void;
  newPostIsOpen: boolean;
  setNewPostIsOpen: (value: boolean) => void;
};

export default function NavIcon({
  icon,
  isActive,
  setActiveIcon,
  newPostIsOpen,
  setNewPostIsOpen,
}: NavIconProps) {
  const toggleOpen = () => {
    const opposite = !newPostIsOpen;
    setNewPostIsOpen(opposite);
  };

  const { label, Icon, ActiveIcon, onClick, extraIcons } = icon;
  const id = `${label}-tooltip`;

  const handleClick = () => {
    if (extraIcons) {
      toggleOpen();
    } else {
      setNewPostIsOpen(false);
      onClick();
    }
    setActiveIcon(icon);
  };

  return (
    <div className="relative">
      <div
        className="text-[0.8rem] hover:scale-125 hover:cursor-pointer"
        onClick={handleClick}
      >
        {isActive ? (
          <ActiveIcon
            className="text-[2rem]"
            data-tooltip-id={id}
            data-tooltip-content={label}
            data-tooltip-place="top"
          />
        ) : (
          <Icon
            className="text-[2rem]"
            data-tooltip-id={id}
            data-tooltip-content={label}
            data-tooltip-place="top"
          />
        )}
        <Tooltip id={id} />
      </div>
      {extraIcons && newPostIsOpen && isActive && (
        <div className="absolute -right-16 bottom-14 w-max bg-white border-solid border-[--dark-blue] border-2 rounded-md">
          <ul>
            <NavDropdownItem
              label={extraIcons[0].label}
              Icon={extraIcons[0].Icon}
            />
            <hr className="text-[--dark-blue] border-solid border-t-2 border-[--dark-blue]" />
            <NavDropdownItem
              label={extraIcons[1].label}
              Icon={extraIcons[1].Icon}
            />
          </ul>
        </div>
      )}
    </div>
  );
}

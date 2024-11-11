import { NavIconType } from '@/utils/types';
import IconWrapper from './IconWrapper';
import { Tooltip } from 'react-tooltip';
import NavDropdownItem from '../TopNav/NavDropdownItem';

type SideIconProps = {
  icon: NavIconType;
  isActive: boolean;
  setActiveIcon: (icon: NavIconType) => void;
  newPostIsOpen: boolean;
  setNewPostIsOpen: (value: boolean) => void;
};

export default function SideIcon({
  icon,
  isActive,
  setActiveIcon,
  newPostIsOpen,
  setNewPostIsOpen,
}: SideIconProps) {
  const { label, Icon, ActiveIcon, onClick, extraIcons } = icon;
  const id = `${label}-tooltip`;

  const toggleOpen = () => {
    const opposite = !newPostIsOpen;
    setNewPostIsOpen(opposite);
  };

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
      <IconWrapper onClick={handleClick}>
        {isActive ? (
          <ActiveIcon
            className="text-[--light-blue] group-hover:text-[--dark-blue]"
            data-tooltip-id={id}
            data-tooltip-content={label}
            data-tooltip-place="right"
          />
        ) : (
          <Icon
            className="text-[--light-blue] group-hover:text-[--dark-blue]"
            data-tooltip-id={id}
            data-tooltip-content={label}
            data-tooltip-place="right"
          />
        )}
        <div className="text-[1rem]">
          <Tooltip id={id} />
        </div>
        <div className="hidden lg:flex text-[--light-blue] group-hover:text-[--dark-blue]">
          {label}
        </div>
      </IconWrapper>

      {extraIcons && newPostIsOpen && isActive && (
        <div className="absolute left-[11vw] lg:left-[26vw] bottom-0 w-max bg-white border-solid border-[--dark-blue] border-2 rounded-md">
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

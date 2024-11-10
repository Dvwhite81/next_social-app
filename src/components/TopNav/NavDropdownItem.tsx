import { IconType } from 'react-icons';
import { Tooltip } from 'react-tooltip';

type NavDropdownItemProps = {
  label: string;
  Icon: IconType;
};

export default function NavDropdownItem({ label, Icon }: NavDropdownItemProps) {
  const id = `${label}-tooltip`;

  return (
    <li className="flex w-full items-center justify-between px-8 py-2 gap-2 hover:bg-[--light-blue] hover:cursor-pointer">
      <span>{label}</span>
      <Icon
        className="text-[1.4rem]"
        data-tooltip-id={id}
        data-tooltip-content={label}
        data-tooltip-place="right"
      />
      <Tooltip id={id} />
    </li>
  );
}

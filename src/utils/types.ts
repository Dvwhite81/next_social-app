import { IconType } from 'react-icons';

export type NavIconType = {
  label: string;
  Icon: IconType;
  ActiveIcon: IconType;
  onClick: () => void;
  extraIcons?: NavIconType[];
};

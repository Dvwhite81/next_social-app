import { IconType } from 'react-icons';

export type NavIconType = {
  label: string;
  Icon: IconType;
  ActiveIcon: IconType;
  onClick: () => void;
  extraIcons?: NavIconType[];
};

export type PostType = {
  id: number;
  content: string;
  imageUrl: string;
  author: string;
  created_at: Date;
};

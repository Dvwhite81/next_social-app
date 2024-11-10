import { IconType } from 'react-icons';

export type NavIconType = {
  label: string;
  Icon: IconType;
  ActiveIcon: IconType;
  onClick: () => void;
  extraIcons?: NavIconType[];
};

export type UserType = {
  id: number;
  username: string;
  is_verified: boolean;
};

export type PostType = {
  id: number;
  content: string;
  imageUrl: string;
  author: UserType;
  created_at: Date;
};

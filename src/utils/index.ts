import { PiHouse, PiHouseFill } from 'react-icons/pi';
import { FaCompass, FaRegCompass } from 'react-icons/fa6';
import { BiMoviePlay, BiSolidMoviePlay } from 'react-icons/bi';
import { MdOutlineAddBox } from 'react-icons/md';
import { TbPhotoVideo } from 'react-icons/tb';
import { RiApps2AddLine } from 'react-icons/ri';
import { TbSend } from 'react-icons/tb';
import { IoIosSend } from 'react-icons/io';
import { NavIconType } from '@/utils/types';

export const icons: NavIconType[] = [
  {
    label: 'Home',
    Icon: PiHouse,
    ActiveIcon: PiHouseFill,
    onClick: () => {},
  },
  {
    label: 'Explore',
    Icon: FaRegCompass,
    ActiveIcon: FaCompass,
    onClick: () => {},
  },
  {
    label: 'Reels',
    Icon: BiMoviePlay,
    ActiveIcon: BiSolidMoviePlay,
    onClick: () => {},
  },
  {
    label: 'New post',
    Icon: MdOutlineAddBox,
    ActiveIcon: MdOutlineAddBox,
    onClick: () => {},
    extraIcons: [
      {
        label: 'Post',
        Icon: TbPhotoVideo,
        ActiveIcon: TbPhotoVideo,
        onClick: () => {},
      },
      {
        label: 'AI character',
        Icon: RiApps2AddLine,
        ActiveIcon: RiApps2AddLine,
        onClick: () => {},
      },
    ],
  },
  {
    label: 'Direct',
    Icon: TbSend,
    ActiveIcon: IoIosSend,
    onClick: () => {},
  },
];

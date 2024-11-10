import { PiHouse, PiHouseFill } from 'react-icons/pi';
import { FaCompass, FaRegCompass } from 'react-icons/fa6';
import { BiMoviePlay, BiSolidMoviePlay } from 'react-icons/bi';
import { MdOutlineAddBox } from 'react-icons/md';
import { TbPhotoVideo } from 'react-icons/tb';
import { RiApps2AddLine } from 'react-icons/ri';
import { TbSend } from 'react-icons/tb';
import { IoIosSend } from 'react-icons/io';
import { NavIconType, UserType } from '@/utils/types';
import { PostType } from './types';

export const ICONS: NavIconType[] = [
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

export const USERS: UserType[] = [
  {
    id: 1,
    username: 'joebonamassa',
    is_verified: true,
  },
  {
    id: 2,
    username: 'terriblejohnny',
    is_verified: false,
  },
  {
    id: 3,
    username: 'paulgilbert_official',
    is_verified: true,
  },
];

export const POSTS: PostType[] = [
  {
    id: 1,
    content: 'Thank you for the warm welcome so far Reno. 😎👍',
    imageUrl: '/1.png',
    author: USERS[0],
    created_at: new Date('January 1 2024'),
  },
  {
    id: 2,
    content:
      'everyone’s got to face down the demons, but maybe today you can put the past away',
    imageUrl: '/2.png',
    author: USERS[1],
    created_at: new Date('October 31 2024'),
  },
  {
    id: 3,
    content:
      'If you build it, they will come. @jimdunlopusa @jhspedals @jampedals @officialibanezguitars @bossinfoglobal @suprousa @catalinbread @voodoolabofficial @dimarzioinc',
    imageUrl: '/3.png',
    author: USERS[2],
    created_at: new Date('Nov 9 2024 23:17:46'),
  },
];

import Image from 'next/image';
import { GoDotFill } from 'react-icons/go';

import { getTimeSince } from '@/utils';
import { PostType } from '@/utils/types';
import VerifiedIcon from './VerifiedIcon';

type SinglePostProps = {
  post: PostType;
};

export default function SinglePost({ post }: SinglePostProps) {
  const { content, imageUrl, author, created_at } = post;
  const { is_verified, username } = author;

  const timeSince = getTimeSince(created_at);

  return (
    <div>
      <h4 className="flex items-center">
        <span className="font-bold">{username}</span>{' '}
        {is_verified && <VerifiedIcon />}
        <GoDotFill className="text-xs text-gray-400 mr-1" />
        <span className="text-gray-500">{timeSince}</span>
      </h4>
      <Image
        className="w-full rounded-md my-2"
        src={imageUrl}
        alt={`post from ${author}`}
        width={100}
        height={100}
      />
      <p className="text-sm">
        <strong>{username}</strong>
        {is_verified ? <VerifiedIcon /> : ''}
        {content}
      </p>
    </div>
  );
}

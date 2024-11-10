import { getTimeSince } from '@/utils';
import { PostType } from '@/utils/types';
import Image from 'next/image';
import { GoDotFill } from 'react-icons/go';

type SinglePostProps = {
  post: PostType;
};

export default function SinglePost({ post }: SinglePostProps) {
  const { content, imageUrl, author, created_at } = post;

  const timeSince = getTimeSince(created_at);

  return (
    <div>
      {/* header */}
      <h4 className="flex items-center">
        <span className="font-bold">{author}</span>{' '}
        <GoDotFill className="text-gray-400" />{' '}
        <span className="text-gray-500">{timeSince}</span>
      </h4>
      {/* image */}
      <Image
        className="w-full rounded-md"
        src={imageUrl}
        alt={`post from ${author}`}
        width={100}
        height={100}
      />
      {/* content */}
      <p>{content}</p>
    </div>
  );
}

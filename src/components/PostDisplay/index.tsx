import { POSTS } from '@/utils/data';
import SinglePost from './SinglePost';
import { Fragment } from 'react';

export default function PostDisplay() {
  return (
    <div className="flex flex-col w-3/5 gap-4 mx-auto my-6 pb-[--nav-height]">
      {POSTS.map((post) => (
        <Fragment key={post.id}>
          <SinglePost post={post} />
          <hr className="my-4 rounded-md border-2 border-[--dark-blue]" />
        </Fragment>
      ))}
    </div>
  );
}

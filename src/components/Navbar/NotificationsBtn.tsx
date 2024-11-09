'use client';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

export default function NotificationsBtn() {
  const [clicked, setClicked] = useState(false);

  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <button type="button" onClick={toggleClicked}>
      {clicked ? (
        <FaHeart className="text-[1.4rem] text-[--light-blue] hover:scale-110" />
      ) : (
        <FaRegHeart className="text-[1.4rem] text-white hover:scale-110" />
      )}
    </button>
  );
}

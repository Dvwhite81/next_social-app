import { ReactNode } from 'react';

type IconWrapperProps = {
  onClick: () => void;
  children: ReactNode;
};

export default function IconWrapper({ onClick, children }: IconWrapperProps) {
  return (
    <div
      className="group flex h-[3rem] text-[2rem] rounded-md items-center justify-center lg:justify-between px-4 hover:bg-[--light-blue] hover:cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

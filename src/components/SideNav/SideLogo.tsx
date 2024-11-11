import Image from 'next/image';
import IconWrapper from './IconWrapper';

export default function SideLogo() {
  return (
    <IconWrapper onClick={() => {}}>
      <Image
        className="flex lg:hidden w-[3rem]"
        src="/logo-icon.png"
        alt="Side navbar icon"
        width={100}
        height={100}
      />
      <Image
        className="hidden lg:flex h-[3rem] w-auto mx-auto"
        src="/logo-no-background.png"
        alt="Side navbar logo"
        width={100}
        height={100}
      />
    </IconWrapper>
  );
}

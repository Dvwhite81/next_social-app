import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      className="h-[7vh] w-auto"
      src="/logo-no-background.png"
      alt="Main Social Logo"
      width={100}
      height={100}
    />
  );
}

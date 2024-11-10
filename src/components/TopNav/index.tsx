import LogoDropdown from './LogoDropdown';
import NavSearch from './NavSearch';
import NotificationsBtn from './NotificationsBtn';

export default function TopNav() {
  return (
    <header className="fixed flex h-[--nav-height] w-full px-2 justify-between bg-[--dark-blue]">
      <LogoDropdown />
      <div className="flex items-center gap-4">
        <NavSearch />
        <NotificationsBtn />
      </div>
    </header>
  );
}

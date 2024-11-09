import LogoDropdown from './LogoDropdown';
import NavSearch from './NavSearch';
import NotificationsBtn from './NotificationsBtn';

export default function Navbar() {
  return (
    <header className="flex h-[15vh] justify-between p-4 bg-[--dark-blue]">
      <LogoDropdown />
      <div className="flex items-center gap-4">
        <NavSearch />
        <NotificationsBtn />
      </div>
    </header>
  );
}

import { clsx } from "clsx";
import {
  LayoutDashboard,
  LogOut,
  Settings,
  Target,
  User
} from "lucide-react";
import { NavLink } from "react-router";
import { useResponsive } from "~/utils/useResponsive";
import { useSidePanelContext } from "./sidePanelContext";

const navItems = [
  { icon: <LayoutDashboard />, label: "Dashboard", path: "/" },
  { icon: <User />, label: "Users", path: "/users" },
];

const secondaryItems = [
  { icon: <Settings />, label: "Settings", path: "/settings" },
];

// these styles needs to be available for the logout button
const navItemStyles = "flex items-center gap-3 mx-1 px-3 py-2 text-sm rounded-full transition-colors cursor-pointer";
const isOpenTextStyles = (isOpen: boolean) => !isOpen ? "sm:max-lg:hidden" : "";

const NavItem = ({ icon, label, isOpen, to, onClick }: any) => {
  const isActiveStyles = (isActive: boolean) => isActive ? "bg-sky-300 dark:bg-sky-600" : "hover:bg-sky-200 dark:hover:bg-sky-800/50";

  return (
    <NavLink to={to} onClick={onClick} className={({ isActive }) => clsx(
      navItemStyles,
      isActiveStyles(isActive)
    )}>
      {icon}
      <span className={clsx(isOpenTextStyles(isOpen), 'truncate')} >{label}</span>
    </NavLink>
  );
};

export const SidePanel = () => {
  const { isOpen, open, close } = useSidePanelContext();
  const { isMobile, isTablet } = useResponsive();

  const showOverlay = (isMobile || isTablet) && isOpen;

  const logout = () => {
    console.log("logout");
  };

  const defaultStyles = "h-screen flex flex-col transition-all z-40 w-74 relative"
  const isOpenStyles = (isOpen: boolean) => isOpen ? "" : "max-sm:-translate-x-full sm:max-lg:w-14";
  const mobileStyles = "max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:shadow-lg max-sm:bg-white max-sm:dark:bg-gray-900";

  return (
    <div>
      {showOverlay && (
        <div
          className="z-30 fixed inset-0 bg-black/50"
          onClick={close}
        />
      )}
      <aside
        className={clsx(
          defaultStyles,
          isOpenStyles(isOpen),
          mobileStyles,
        )}
      >
        {/* Brand */}
        <div className="mt-2 px-3 py-2">
          {/* Replace with your logos */}
          <div className="flex items-center gap-2 font-bold text-xl">
            <Target className="w-8 h-8" />
            {isOpen ? 'BrandLogo' : ''}
          </div>

        </div>
        {/* Nav */}
        <nav className="flex flex-col gap-1 mt-4">
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              to={item.path}
              {...item}
              isOpen={isOpen}
              onClick={close}

            />
          ))}
        </nav>
        <div className="grow-1" onClick={open} />
        {/* Secondary Nav */}
        <div className="flex flex-col gap-1 mt-auto pb-4">
          {secondaryItems.map((item) => (
            <NavItem
              key={item.path}
              {...item}
              to={item.path}
              isOpen={isOpen}
              onClick={close}
            />
          ))}
          <button onClick={logout} className={navItemStyles}>
            <LogOut />
            <span className={clsx(isOpenTextStyles(isOpen), 'truncate')}>{"Logout"}</span>
          </button >
        </div>
      </aside>
    </div>
  );
};

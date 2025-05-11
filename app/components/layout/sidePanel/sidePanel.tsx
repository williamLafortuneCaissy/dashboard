import { clsx } from "clsx";
import {
  LayoutDashboard,
  LogOut,
  Settings,
  Target
} from "lucide-react";
import { useResponsive } from "~/utils/useResponsive";
import { navItemStyles, navTextIsShown, sidepanelIsFixed, sidepanelIsFullWidth, sidepanelIsOffset, sidePanelStyles } from "./sidePanel.styles";
import { useSidePanel } from "./useSidePanel";

const navItems = [
  { icon: <LayoutDashboard />, label: "Dashboard", path: "/" },
];

const secondaryItems = [
  { icon: <Settings />, label: "Settings", path: "/settings" },
  { icon: <LogOut />, label: "Logout", path: "/logout" },
];

const NavItem = ({ icon, label, showText, onClick }: any) => (
  <button className={clsx(navItemStyles, navTextIsShown(showText))} onClick={onClick}>
    {icon}
    {showText && <span>{label}</span>}
  </button>
);

export const SidePanel = () => {
  const { isOpen, open, close } = useSidePanel();
  const { isMobile, isTablet } = useResponsive();

  const showOverlay = (isMobile || isTablet) && isOpen;
  const isCollapsed = isTablet && !isOpen;

  return (
    <>
      {showOverlay && (
        <div
          className="fixed inset-0 bg-white/50 z-30"
          onClick={close}
        />
      )}
      <aside
        className={clsx(
          sidePanelStyles,
          sidepanelIsOffset(isMobile, isOpen),
          sidepanelIsFixed(isMobile),
          sidepanelIsFullWidth(!isCollapsed)
        )}
      >
        {/* Brand */}
        <div className="px-4 py-3">
          {/* Replace with your logos */}
          <div className="text-xl font-bold flex items-center gap-2">
            <Target />
            {!isCollapsed ? 'BrandLogo' : ''}
          </div>

        </div>
        {/* Nav */}
        <nav className="flex flex-col gap-1 mt-4">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              {...item}
              showText={!isCollapsed}
              onClick={close}
            />
          ))}
        </nav>
        <div className="grow-1" onClick={open} />
        {/* Secondary Nav */}
        <div className="mt-auto flex flex-col pb-4">
          {secondaryItems.map((item) => (
            <NavItem
              key={item.label}
              {...item}
              showText={!isCollapsed}
              onClick={close}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

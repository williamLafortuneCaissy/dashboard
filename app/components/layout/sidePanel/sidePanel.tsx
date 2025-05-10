import { clsx } from "clsx";
import {
  LayoutDashboard,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Target
} from "lucide-react";
import { useResponsive } from "~/utils/useResponsive";
import { navItemStyles, navTextIsShown, sidepanelIsFixed, sidepanelIsFullWidth, sidepanelIsOffset, sidePanelStyles, wrapperIsCollapsed } from "./sidePanel.styles";
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
  const {
    isOpen,
    isCollapsed,
    open,
    close,
    toggleCollapsed,
    autoClose,
  } = useSidePanel();
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const showOverlay = isOpen && (isMobile || isTablet);
  const showOpenZone = isTablet && !isOpen;

  return (
    <>
      <div className={clsx('h-screen', wrapperIsCollapsed(isCollapsed))}>
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
            sidepanelIsFullWidth(isMobile || isOpen)
          )}
          onMouseEnter={() => isCollapsed && isDesktop && open()}
          onMouseLeave={() => isCollapsed && isDesktop && close()}
        >
          {showOpenZone && <div className="absolute inset-0 z-100" onClick={open} />}
          {/* Brand */}
          <div className="px-4 py-3 border-b">
            {/* Replace with your logos */}
            {isMobile || isOpen ? (
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold flex items-center gap-2"><Target /> BrandLogo</span>
                {!isMobile && (
                  <button onClick={isTablet ? close : toggleCollapsed}>
                    {isCollapsed ?
                      <PanelLeftOpen className="w-5 h-5" /> :
                      <PanelLeftClose className="w-5 h-5" />}
                  </button>
                )}
              </div>
            ) : (
              <div className="flex justify-center"><Target /></div>
            )}
          </div>
          {/* Nav */}
          <nav className="flex flex-col gap-1 mt-4">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                {...item}
                showText={isMobile || isOpen}
                onClick={autoClose}
              />
            ))}
          </nav>
          {/* Secondary Nav */}
          <div className="mt-auto flex flex-col pb-4">
            {secondaryItems.map((item) => (
              <NavItem
                key={item.label}
                {...item}
                showText={isMobile || isOpen}
                onClick={autoClose}
              />
            ))}
          </div>
        </aside>
      </div >
    </>
  );
};

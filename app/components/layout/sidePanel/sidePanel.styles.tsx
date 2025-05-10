

export const wrapperIsCollapsed = (isCollapsed: boolean) => isCollapsed ? "w-16" : "auto";

export const sidePanelStyles = "h-full flex flex-col transition-all bg-white dark:bg-gray-950 z-40"
export const sidepanelIsOffset = (isMobile: boolean, isOpen: boolean) => isMobile && !isOpen ? "-translate-x-full" : "";
export const sidepanelIsFixed = (isMobile: boolean) => isMobile ? "fixed top-0 left-0" : "relative";
export const sidepanelIsFullWidth = (isFullWidth: boolean) => isFullWidth ? "w-74" : "w-16";

export const navItemStyles = "flex items-center gap-3 px-4 py-2 text-sm";
export const navTextIsShown = (isShown: boolean) => !isShown ? "justify-center" : "";

import { useCallback, useEffect, useState } from "react";
import { useResponsive } from "~/utils/useResponsive";


export const useSidePanel = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [isOpen, setIsOpen] = useState(isDesktop);
  const [isCollapsed, setIsCollapsed] = useState(false);

  console.log('isOpen :>> ', isOpen);

  useEffect(() => {
    setIsOpen(isDesktop);
  }, [isDesktop]);

  useEffect(() => {
    setIsOpen(!isCollapsed);
  }, [isCollapsed]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggleCollapsed = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const autoClose = () => {
    if (isMobile || isTablet) close();
  };

  return {
    isOpen,
    isCollapsed,
    open,
    close,
    toggleCollapsed,
    autoClose,
  };
};

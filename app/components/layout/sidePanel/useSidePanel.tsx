import { useCallback, useEffect, useState } from "react";
import { useResponsive } from "~/utils/useResponsive";


export const useSidePanel = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [isOpen, setIsOpen] = useState(isDesktop);

  useEffect(() => {
    setIsOpen(false);
  }, [isMobile, isTablet, isDesktop]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    open,
    close,
  };
};

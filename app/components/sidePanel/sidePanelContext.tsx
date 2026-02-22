import { createContext, useCallback, useContext, useState } from "react";
import { useResponsive } from "~/utils/useResponsive";


const SidePanelContext = createContext({
  isOpen: false,
  open: () => { },
  close: () => { },
});

export const SidePanelContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { isTablet } = useResponsive();
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   setIsOpen(false);
  //   // should close side panel on mobile + tablet
  // }, [isTablet]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);



  return (
    <SidePanelContext.Provider value={{ isOpen, open, close }}>
      {children}
    </SidePanelContext.Provider>
  );
};

export const useSidePanelContext = () => {
  const ctx = useContext(SidePanelContext);
  if (!ctx) throw new Error("useSidePanel must be used within a SidePanelProvider");
  return ctx;
};
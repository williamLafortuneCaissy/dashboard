import { Menu, User } from "lucide-react";
import { useResponsive } from "~/utils/useResponsive";
import { useSidePanelContext } from "../sidePanel/sidePanelContext";

export const Header = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const { open } = useSidePanelContext();



  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        {isMobile && (
          <button onClick={open} className="p-2">
            <Menu className="w-5 h-5" />
          </button>
        )}

        {(isTablet || isDesktop) && (
          <nav aria-label="Breadcrumb" className="text-muted-foreground text-sm">
            Dashboard {/* Replace with dynamic breadcrumb later */}
          </nav>
        )}
      </div>

      <div className="flex justify-center items-center bg-muted rounded-full w-8 h-8">
        <User className="w-4 h-4 text-muted-foreground" />
      </div>

    </header>
  );
};

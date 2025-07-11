import { useState } from "react";
import SideBarContext from "./sideBarContext";

/**
 * SidebarContextProvider is a React context provider component
 * that manages the state and behavior of the application's sidebar.
 *
 * It makes `isOpen`, `setIsOpen`, and `handleCloseSideBar` available
 * to all children components that consume the SideBarContext.
 */
const SidebarContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Local state to manage whether the sidebar is open or closed
    const [isOpen, setIsOpen] = useState<boolean>(false);

    /**
     * Closes the sidebar by setting `isOpen` to false.
     */
    function handleCloseSideBar() {
        setIsOpen(false);
    }

    return (
        <SideBarContext.Provider value={{ isOpen, setIsOpen, handleCloseSideBar }}>
            {children}
        </SideBarContext.Provider>
    );
};

export default SidebarContextProvider;

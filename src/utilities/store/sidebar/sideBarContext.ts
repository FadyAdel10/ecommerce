import { createContext } from "react";

/**
 * SideBarContextInterface defines the shape of the sidebar context object.
 * - `isOpen`: Boolean indicating if the sidebar is currently open.
 * - `setIsOpen`: Function to update the `isOpen` state.
 * - `handleCloseSideBar`: Function to close the sidebar.
 */
export interface SideBarContextInterface {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    handleCloseSideBar: () => void;
}

/**
 * Default values used to initialize the context.
 * These will be overridden by the actual context provider implementation.
 */
const defaultSideBarValues: SideBarContextInterface = {
    isOpen: false,
    setIsOpen: () => {},
    handleCloseSideBar: () => {}
};

/**
 * SideBarContext provides global access to sidebar state and handlers
 * to open/close the sidebar across the app.
 */
const SideBarContext = createContext<SideBarContextInterface>(defaultSideBarValues);

export default SideBarContext;

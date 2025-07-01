import { createContext } from "react";

const defaultSideBarValues = {
    isOpen:false,
    setIsOpen: () => {},
    handleCloseSideBar: () => {}
}

const SideBarContext = createContext(defaultSideBarValues);

export default SideBarContext;
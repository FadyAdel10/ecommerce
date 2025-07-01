import { useState } from "react";
import SideBarContext from "./sideBarContext";

function SidebarContextProvider({children}) {
    const [isOpen,setIsOpen] = useState(false);

    function handleCloseSideBar(){
        setIsOpen(false);
    }
    return(<SideBarContext.Provider value={{isOpen,setIsOpen,handleCloseSideBar}}>{children}</SideBarContext.Provider>);
}

export default SidebarContextProvider;
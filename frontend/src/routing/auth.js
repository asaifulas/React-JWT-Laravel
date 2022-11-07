import { CpuChipIcon, HomeIcon, TableCellsIcon, UserIcon, WrenchScrewdriverIcon } from "@heroicons/react/20/solid"
import Devices from "../pages/auth/devices"
import Home from "../pages/auth/home"
import Logs from "../pages/auth/logs"
import Profile from "../pages/auth/profile"
import Setting from "../pages/auth/setting"

const routes = [
    {
        type: "collapse",
        name: "Home",
        key: "home",
        icon: <HomeIcon className="sidebarIcon"/>,
        path: "/home",
        component: <Home/>
    },
    {
        type: "collapse",
        name: "Devices",
        key: "devices",
        icon: <CpuChipIcon className="sidebarIcon"/>,
        path: "/devices",
        component: <Devices/>
    },
    {
        type: "collapse",
        name: "Logs",
        key: "logs",
        icon: <TableCellsIcon className="sidebarIcon"/>,
        path: "/logs",
        component: <Logs/>
    },
    {
        type: "collapse",
        name: "Profile",
        key: "profile",
        icon: <UserIcon className="sidebarIcon"/>,
        path: "/profile",
        component: <Profile/>
    },
    {
        type: "collapse",
        name: "Setting",
        key: "setting",
        icon: <WrenchScrewdriverIcon className="sidebarIcon"/>,
        path: "/setting",
        component: <Setting/>
    },
]
export default routes
import { Outlet } from "react-router-dom";
import TopNav from "../TopNav"; 



const DemoLayout = () => {
    return (
        <div>
              <TopNav />
        <Outlet />
        </div>
    );
    }   

export default DemoLayout;
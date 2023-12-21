
import { Outlet } from 'react-router-dom';
import DashboardNavbar from './Components/DashboardNavbar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const DashBoard = () => {
    return (
        <div  className="w-3/4 mx-auto">
            <Navbar></Navbar>
            <DashboardNavbar></DashboardNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashBoard;
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
    return (
        <div className="mx-auto bg-black text-white">
            <div className="flex flex-wrap justify-center lg:justify-between gap-4 py-4 px-2 lg:px-8">
                <div>
                    <Link to={'/dashboard'} className="text-white hover:text-gray-300">
                        <button className="focus:outline-none">Profile</button>
                    </Link>
                </div>
                <div>
                    <Link to={'createTask'} className="text-white hover:text-gray-300">
                        <button className="focus:outline-none">Create Tasks</button>
                    </Link>
                </div>
                <div>
                    <Link to={'outUser'} className="text-white hover:text-gray-300">
                        <button className="focus:outline-none">Our Users</button>
                    </Link>
                </div>
                <div>
                    <Link to={'toDo'} className="text-white hover:text-gray-300">
                        <button className="focus:outline-none">To-Do list</button>
                    </Link>
                </div>
                <div>
                    <Link to={'allList'} className="text-white hover:text-gray-300">
                        <button className="focus:outline-none">Previous tasks</button>
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default DashboardNavbar;

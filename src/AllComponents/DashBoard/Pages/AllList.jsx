import Swal from "sweetalert2";
import useToDoListing from "../../../Hooks/useToDoListing";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthProvider } from "../../../Providers/AuthProviders";

const AllList = () => {
    const [createTask, , refetch] = useToDoListing();
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthProvider);

    const filteredData = createTask.filter((todo) => todo.currentUser === user.email);


    const handleDelete = (taskId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/createTask/${taskId}`);
                
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'deleted',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    };

    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold mb-4">All Tasks</h2>
            <table className="table-auto min-w-full">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Titles</th>
                        <th className="border px-4 py-2">Deadlines</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((task, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{task.titles}</td>
                            <td className="border px-4 py-2">{task.deadlines}</td>
                            <td className="border px-4 py-2">
                                <Link to={`/dashboard/editItem/${task._id}`}>
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 mr-2 rounded focus:outline-none"
                                    >
                                        Edit
                                    </button>
                                </Link>
                                <button
                                    onClick={() => handleDelete(task._id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded focus:outline-none"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllList;

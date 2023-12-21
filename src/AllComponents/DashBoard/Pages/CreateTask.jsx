import { useContext, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthProvider } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

const CreateTask = () => {

    const axiosSecure = useAxiosSecure();
    const {user, loading}= useContext(AuthProvider)
    const [taskLoading, setTaskLoading] = useState(false);

    
    // add task
    const handleSubmitTask = async (e)=>{
        e.preventDefault();
        setTaskLoading(true)
        const form = e.target;
        const titles = form.titles.value;
        const deadlines = form.deadlines.value;
        const description = form.description.value;
        const priority = form.priority.value;
        const currentUser = user.email;
        const toDo = 'to-do';
        

    const createTask = {
        titles,
        deadlines,
        description,
        priority,
        currentUser,
        toDo

        
    };

    try {
        await axiosSecure.post('/createTask', createTask); 
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Added to the To-do list.",
                showConfirmButton: false,
                timer: 1500,
            });
            form.reset()
        
        } catch (error) {
            // Handle error if needed
            console.error("Error submitting task:", error);
        } finally {
            setTaskLoading(false); // Set loading to false when task submission completes
        }
    };
    


    return (
        <div className='bg-slate-500'>

            <div>
                <div className="mt-6 mb-6 min-h-screen bg-base-200">
                    <div className="mx-auto justify-center">
                    <div className=" flex-shrink-0 w-full shadow-2xl bg-base-100">
                        {/* form */}
                        <form
                        onSubmit={handleSubmitTask}
                        className=" mx-auto justify-between lg:p-11 lg:grid lg:grid-cols-2 gap-7 w-max"
                        >
                        {/* Titles */}
                        <div className="form-control bg-green-500">
                            <label className="label">
                            <span className="label-text">Titles</span>
                            </label>
                            <input
                            type="text"
                            placeholder="titles"
                            name="titles"
                            className="input input-bordered"
                            required
                            />
                        </div>

                        {/* deadlines */}
                        <div className="form-control border-2 bg-green-500 mt-2">
                            <label className="label">
                            <span className="label-text">Deadlines</span>
                            </label>
                            <input
                            type="date"
                            name="deadlines"
                            required
                            />
                        </div>

                        

                        {/* Short description */}
                        <div className="form-control border-2 bg-green-500 mt-2">
                            <label className="label">
                            <span className="label-text">Description</span>
                            </label>
                            <textarea
                            className="mt-3 p-3"
                            name="description"
                            rows="1"
                            cols="50"
                            placeholder="Write a Short Description"
                            ></textarea>
                        </div>

                        {/* priority */}
                        <div className="form-control border-2 bg-green-500 mt-2">
                            <label className="label">
                            <span className="label-text">Priority</span>
                            </label>
                            <input
                            type="text"
                            name="priority"
                            placeholder="example - Low,Moderate, High, e.t.c"
                            className="input input-bordered"
                            />
                        </div>


                        {/* Add Task */}
                        <div className="form-control lg:mt-9">
                            <button className="btn btn-primary">Add Task</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
  
        </div>
    );
};

export default CreateTask;
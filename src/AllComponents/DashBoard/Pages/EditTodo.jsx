
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../../Providers/AuthProviders';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const EditTodo = () => {
    const { _id,titles, deadlines, description, priority} = useLoaderData();
    const {user} = useContext(AuthProvider)
    const axiosSecure = useAxiosSecure()
    const handleUpdate = async (e)=>{
        e.preventDefault();
        const form = e.target;
        const titles = form.titles.value;
        const deadlines = form.deadlines.value;
        const description = form.description.value;
        const priority = form.priority.value;
        const currentUser = user.email;
        const toDo = 'to-do';

        const updateToDo = {
            titles,
            deadlines,
            description,
            priority,
            currentUser,
            toDo
        };
        const updateRes = await axiosSecure.patch(`/createTask/${_id}`, updateToDo);
            if(updateRes.data.modifiedCount > 0){
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'To do list updated',
                    showConfirmButton: false,
                    timer: 1500
                  });
            }


    }
    return (
        <div className='bg-slate-500'>

            <div>
                <div className="mt-6 mb-6 min-h-screen bg-base-200">
                    <div className="mx-auto justify-center">
                    <div className=" flex-shrink-0 w-full shadow-2xl bg-base-100">
                        {/* form */}
                        <form
                        onSubmit={handleUpdate}
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
                            defaultValue={titles}
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
                            defaultValue={deadlines}
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
                            defaultValue={description}
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
                            defaultValue={priority}
                            placeholder="example - Low,Moderate, High, e.t.c"
                            className="input input-bordered"
                            />
                        </div>


                        {/* update */}
                        <div className="form-control lg:mt-9">
                            <button className="btn btn-primary">Update</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
  
        </div>
    );
};

export default EditTodo;
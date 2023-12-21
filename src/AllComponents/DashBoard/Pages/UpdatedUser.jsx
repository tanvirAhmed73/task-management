
const UpdatedUser = () => {
    return (
        <div className="bg-slate-500 p-6">
            <h1 className="text-5xl text-center mt-5 text-white underline mb-5">
                Update Your Profile
            </h1>
            <form className="max-w-md mx-auto">
                <div className="mb-4">
                    <label className="text-white block mb-1">Name</label>
                    <input
                        type="text"
                        name="displayName"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="text-white block mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="text-white block mb-1">Phone Number</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        className="input input-bordered w-full"
                    />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default UpdatedUser;
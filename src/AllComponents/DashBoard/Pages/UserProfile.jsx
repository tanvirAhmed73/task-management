import { useContext } from "react";
import { AuthProvider } from "../../../Providers/AuthProviders";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const {user} = useContext(AuthProvider);
    console.log(user)
    return (
        <div className='bg-slate-500'>
        {/* headline */}
            <h1 className="text-5xl text-center mt-5 text-white underline mb-5">Your Profile</h1>
        {/* profile picture name email */}
            <div className="flex justify-center gap-5">
                {/* profile picture */}
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={user.photoURL} />
                    </div>
                </div>
                {/* name and email */}
                <div className="">
                    <h1>Name: {user.displaName}</h1>
                    <h1>Email: {user.email}</h1>
                    <h1>Number: {user.phoneNumber}</h1>
                </div>
            </div>
        
        {/* update profile button */}
        <Link to={'/dashboard/updateUser/'}>
            <button
                className="btn block mx-auto mt-11"
                >
                                        Edit Your Profile
            </button>
        </Link>
        <button className=" "></button>
        
        </div>
    );
};

export default UserProfile;
import { useContext } from "react";
import { AuthProvider } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthProvider)
    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    } 
    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoutes;
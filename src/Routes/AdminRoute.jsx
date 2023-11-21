import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = (children) => {

    const [isAdmin, isAdminLoading] = useAdmin();
    const {user, loading} = useAuth();
    const location = useLocation();
    if(loading || isAdminLoading)
    {
        return <h1 className="text-3xl font-semibold text-green-600" > Loading...... </h1>
    }

    if(user && isAdmin)
    {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default AdminRoute;
import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../LevelContext/LevelContext";
const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(user){
        return children;
    }
    else{
       return <Navigate state={location.pathname} to={`/login`}></Navigate>
    }
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children:PropTypes.node.isRequired
}
import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../LevelContext/LevelContext";
const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(user){
        return children;
    }
    else{
       return <Navigate to={`/login`}></Navigate>
    }
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children:PropTypes.node.isRequired
}
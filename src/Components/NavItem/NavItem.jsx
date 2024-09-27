import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './NavItem.css';

const NavItem = ({route}) => {
    const {
        path,
        name
    } = route;
    return (
        <li className="text-lg ml-5 active:bg-none focus:bg-none"><NavLink to={`${path}`}>{name}</NavLink></li>
    );
};

NavItem.propTypes = {
    route:PropTypes.object.isRequired
}
export default NavItem;
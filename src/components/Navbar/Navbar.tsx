import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <NavLink to="/">All Jobs</NavLink>
            <NavLink to="/favourites">My favourites</NavLink>
        </>
    );
};

export default Navbar;

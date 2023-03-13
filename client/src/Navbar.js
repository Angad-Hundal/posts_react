
import {Link} from 'react-router-dom';


const Navbar = () => {


    return ( 

        <nav className="navbar">

            <h1> Posts:  </h1>

            <div className="links">

                {/* various links to navigate */}

                <Link to="/"> Home </Link>
                <Link to="/addPosts" > Add Posts </Link>
                <Link to="/showPosts" > Show Posts </Link>

            </div>
        </nav>
    );


}
 
export default Navbar;
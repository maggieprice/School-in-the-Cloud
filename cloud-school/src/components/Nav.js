import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";

function Nav () {

    return (
        <div>
                <h1>School in the Cloud</h1>
                <Router>
                <Link>Home</Link>
                <Link>Mission</Link>
                <Link>About Us</Link>
                <Link>Contact</Link>
                <Link>Login</Link>
                <Link>Register</Link>
                </Router>
            
        </div>
    )
}

export default Nav
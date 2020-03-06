import React from 'react'

function Register () {

    return (
        <div>
            <header>
                <img></img>
            </header>
            <div className="contact form">
            <form method="POST">
                <label>Full Name</label>
                    <input type="text" />
                <label>Username</label>
                    <input type="text" />
                <label>Password</label>
                    <input type="text" />
                <label>Role</label>
                    <input type="text" />
                <label>Email</label>
                    <input type="email" />
                <label>Phone</label>
                    <input type="text" />
                <button type="submit">Submit</button>
                </form>
            </div>
        
        </div>
    )
}

export default Register
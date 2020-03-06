import React from 'react'

function Login () {

    return (
        <div>
            <header>
                <img></img>
            </header>
            <div className="contact form">
            <form method="POST">
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        
        </div>
    )
}

export default Login
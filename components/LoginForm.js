import { useAuth } from '../context/auth'
import React, { useState } from "react";

function LoginForm() {
    const { login } = useAuth();
    const [username, setUsername] = useState({
    })
    const handleLogin = ((event) => {
        event.preventDefault();
        console.log(event.target.username.value);
        const user = event.target.username.value
        const password = event.target.password.value
        login(user, password)
    })

    return (
        <div>
            <div className="w-2/3 h-56 mx-auto my-10 bg-green-300 rounded-lg ">
                <form onSubmit={handleLogin}>
                    <div className="flex flex-col items-center justify-center">
                        <label htmlFor="username" > User name </label>
                        <br />
                        <input type="text" name="username" id="username" className="flex-grow w-10/12 bg-gray-200 rounded-sm" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <label htmlFor="password" > Password </label>
                        <br />
                        <input type="password" name="password" id="password" className="flex-grow w-10/12 mt-2 bg-gray-200 rounded-sm" />
                    </div>
                    <br />
                    <div className="flex-grow w-10/12 mx-auto my-1 font-semibold bg-green-500 rounded ">
                        <button className="h-12 text-xl " > Login </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;
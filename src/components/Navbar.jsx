import { NavLink } from "react-router-dom"

function Navbar() {

    return (
        <>
            <div>
                <NavLink to='/'>Task List</NavLink>
                <NavLink to='/add-task'>Add Task</NavLink>
            </div>
        </>
    )
}

export default Navbar
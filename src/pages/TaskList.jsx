import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext.jsx";
import TaskRow from "../components/TaskRow.jsx";

function TaskList() {
    const { tasks } = useContext(GlobalContext);
    console.log(tasks);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Status</th>
                        <th>Data di creazione</th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.map(task => (
                        <TaskRow key={task.id} task={task} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TaskList
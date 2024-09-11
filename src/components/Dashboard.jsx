import { useEffect, useState } from "react"
import { AddTask } from "./AddTask"
import { Stats } from "./Stats"
import { TaskList } from "./TaskList"
import axios from "axios"

export const Dashboard = () => {

    const [tasks, setTasks] = useState([])

    const handleAdd = task => {
        setTasks([...tasks, task])
    }
    const handleDelete = id => {
        setTasks(tasks.filter((task) => task.id != id))
    }
    const handleChange = (id, status) => {
        setTasks(tasks.map(task =>
            task.id == id ? { ...task, status } : task
        ))
    }

    useEffect(() => {
        axios
            .get("http://localhost:3004/tasks")
            .then((res) => {
                setTasks(res.data);
            })
    }, [])

    return <div className="dashboard">
        <div className="row">
            <TaskList
                tasks={tasks}
                onDelete={handleDelete}
                onChange={handleChange}
            />
            <AddTask
                onAdd={handleAdd}
            />
        </div>
        <Stats />
    </div>
}
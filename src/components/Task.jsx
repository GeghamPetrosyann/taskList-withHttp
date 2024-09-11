import axios from "axios"
import { useState } from "react"

export const Task = ({ task, onDelete, onChange }) => {

    const [select, setSelect] = useState("")
    
    const handleDelete = id => {
        axios
            .delete("http://localhost:3004/tasks/" + task.id)
            .then((response => {
                onDelete(task.id);
            }))
    }

    const handleChange = (id, selected) => {
        axios.patch("http://localhost:3004/tasks/" + id, { status: selected })
            .then(response => {
                setSelect(selected)
                onChange(id, selected)
            })
    }
    return <div>
        <p>{task.text}</p>
        <small>status: {task.status}</small>
        {
            task.status == "in progress"
                ? <img src="https://cdn2.iconfinder.com/data/icons/time-date-management-1/64/time__data_management-12-512.png" />
                : task.status == "unstarted"
                    ? <img src="https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-5/24/ic_fluent_navigation_unread_24_regular-1024.png" />
                    : <img src="https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-1024.png" />
        }
        <select value={select} onChange={(selected) => handleChange(task.id, selected.target.value)}>
            <option>unstarted</option>
            <option>in progress</option>
            <option>completed</option>
        </select>
        <button onClick={handleDelete}>delete</button>
    </div>
}

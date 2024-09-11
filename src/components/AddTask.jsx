import axios from "axios"
import { useState } from "react"

export const AddTask = ({ onAdd }) => {

    const [text, setText] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = event => {

        event.preventDefault()

        if (!text.trim()) {
            setError("plz fill the filled")
        }
        setError("")
        setText("")

        axios
            .post("http://localhost:3004/tasks", { text, status: "unstarted" })
            .then((response) => {
                onAdd(response.data);
            })
    }
    return <div>
        <p>AddTask</p>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="write the task"
                value={text}
                onChange={event => setText(event.target.value)}
            />
            <button>save</button>
        </form>
    </div>
}
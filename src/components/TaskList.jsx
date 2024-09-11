
import { Task } from "./Task"
export const TaskList = ({ tasks, onDelete, onChange }) => {
    return <div>
        <p>TaskList</p>
        <div className="list">
            {
                tasks.map(task =>
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onChange={onChange}
                    />
                )
            }
        </div>
    </div>
}
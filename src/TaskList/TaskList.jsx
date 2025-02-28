export default function TaskList(props){
    return (
        <ul>
            {props.tasks.map((task, i) => <li key={i}>{task.title} {task.done ? '✅' : '❌'} </li>)}
        </ul>
    )
}
import useToDoListing from "../../../Hooks/useToDoListing";

const ToDo = () => {
    const [createTask, , refetch] = useToDoListing();

    const toDoTasks = createTask.filter(task => task.todo === 'to-do');
    const ongoingTasks = createTask.filter(task => task.status === 'ongoing');
    const completedTasks = createTask.filter(task => task.status === 'completed');
    console.log(toDoTasks)
    const renderTable = (tasks, title, bgColor) => (
        <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className={`bg-${bgColor} text-white p-2`}>{title}</h2>
            <div className="overflow-x-auto">
                <table className="table-auto min-w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Titles</th>
                            <th className="border px-4 py-2">Deadlines</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((item, index) => (
                            
                            <tr key={index}>
                                <td className="border px-4 py-2">{item.titles}</td>
                                <td className="border px-4 py-2">{item.deadlines}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="flex flex-wrap justify-evenly">
            {renderTable(toDoTasks, 'To-Do Tasks', 'yellow-500')}
            {renderTable(ongoingTasks, 'Ongoing Tasks', 'blue-500')}
            {renderTable(completedTasks, 'Completed Tasks', 'green-500')}
        </div>
    );
};

export default ToDo;

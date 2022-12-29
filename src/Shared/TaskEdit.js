import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const TaskEdit = () => {
    const navigate = useNavigate();
    const task = useLoaderData();
    const { taskName, details, date, _id } = task;
    const [updatedTask, setUpdatedTask] = useState(task)
    // console.log(updatedTask)

    const handleUpdatedTask = (e)=>{
        e.preventDefault()
        // console.log(e.target)
        fetch(`http://localhost:5000/editTask/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('successfully updated')
                navigate('/myTask')
                // console.log(data)
            }
        })

    }

    // handleTaskEdit
    const handleInputChange = event =>{
        const field = event.target.taskName;
        const value = event.target.value;
        const newTask = {...task}
        newTask[field] = value;
        setUpdatedTask(newTask);
    }
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-400 text-white mx-auto my-10">
            <h1 className="text-2xl font-bold text-center">Edit your task </h1>
            <form onSubmit={handleUpdatedTask} className="space-y-6 ng-untouched ng-pristine ng-valid">

                <div className="space-y-1 text-sm">
                    <label for="email" className="block ">Task title </label>
                    <input onChange={handleInputChange} type="text" defaultValue={taskName} name="taskName" id="taskName" placeholder="Task name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label for="password" className="block">Date</label>
                    <input onChange={handleInputChange} type="date" defaultValue={date} name="date" id="date" placeholder="Date" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />

                </div>
                <div className="space-y-1 text-sm">
                    <label for="details" className="text-sm">Note/Comment</label>
                    <textarea onChange={handleInputChange} name='details' defaultValue={details} id="details" placeholder="About your task:" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" required></textarea>
                </div>

                <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-black">Edit </button>
            </form>
        </div>
    );
};

export default TaskEdit;
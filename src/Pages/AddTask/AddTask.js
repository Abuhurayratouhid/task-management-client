import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddTask = () => {
    const navigate = useNavigate()

    const handleTaskAddForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const taskName = form.taskName.value;
        const date = form.date.value;
        const details = form.details.value;

        const taskInfo = {
            taskName,
            date,
            details,
        }
        // console.log(taskInfo)
        fetch('http://localhost:5000/taskAdd', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset()
                    toast.success('Task added')
                    navigate('/myTask')
                    console.log(data)
                }


            })
    }
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-black text-white mx-auto my-10">
            <h1 className="text-2xl font-bold text-center">Add your task </h1>
            <form onSubmit={handleTaskAddForm} className="space-y-6 ng-untouched ng-pristine ng-valid">

                <div className="space-y-1 text-sm">
                    <label for="email" className="block ">Task title </label>
                    <input type="text" name="taskName" id="taskName" placeholder="Task name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label for="password" className="block">Date</label>
                    <input type="date" name="date" id="date" placeholder="Date" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />

                </div>
                <div className="space-y-1 text-sm">
                    <label for="details" className="text-sm">Note/Comment</label>
                    <textarea name='details' id="details" placeholder="About your task:" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" required></textarea>
                </div>

                <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">Add</button>
            </form>
        </div>
    );
};

export default AddTask;
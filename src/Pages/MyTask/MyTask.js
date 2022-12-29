import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../Shared/Loader';

const MyTask = () => {
    const navigate = useNavigate()
    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: () => fetch('https://task-management-server-zeta.vercel.app/allTask')
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    const handleComplete = (_id) => {
        fetch(`https://task-management-server-zeta.vercel.app/taskComplete/${_id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    navigate('/completedTask')
                }
                console.log(data)
            })
        // console.log(_id)
    }

    const handleDelete = (_id) => {
        const confirmed = window.confirm('Are you sure to delete this task')

        // console.log('delete ID', _id)
        if (confirmed) {
            fetch(`https://task-management-server-zeta.vercel.app/taskDelete/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        toast.success('Deleted')
                        refetch()
                    }
                   
                })
        }

    }

    // const handleTaskEdit = (_id)=>{

    // }


    return (
        <div className='mt-20'>
            <h1 className='text-3xl text-center font-bold pb-10'>All added Tasks</h1>


            {/* task table  */}
            <div className=' max-w-[600px] mx-auto'>
                <table>
                    <thead className="bg-gray-300 ">
                        <tr className="text-left">
                            <th className="p-3">Task ID</th>
                            <th className="p-3">Task title </th>
                            <th className="p-3">Date </th>
                            <th className="p-3">Action</th>
                            <th className="p-3">Action</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, i) => <tr key={i} className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                            <td className="p-3">
                                <p>{i + 1}</p>
                            </td>
                            <td className="p-3">
                                <p>{task.taskName}</p>
                            </td>
                            <td className="p-3">
                                <p>{task.date}</p>

                            </td>

                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md bg-violet-600 text-gray-50">
                                    <button onClick={() => handleComplete(task._id)}>Complete</button>
                                </span>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md bg-gray-600 text-gray-50">
                                    <Link to={`/edit/${task._id}`}><button>Edit </button></Link>
                                </span>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md bg-red-300 text-gray-50">
                                    <button onClick={() => handleDelete(task._id)}>Delete</button>
                                </span>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTask;
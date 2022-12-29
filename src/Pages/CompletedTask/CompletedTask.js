import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import Loader from '../../Shared/Loader';

const CompletedTask = () => {
    const { data: completedTasks = [], isLoading, refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: () => fetch('https://task-management-server-zeta.vercel.app/completedTask')
            .then(res => res.json())
    })

    if(isLoading){
        return <Loader></Loader>
    }

    const handleNotComplete = (_id)=>{
        fetch(`https://task-management-server-zeta.vercel.app/taskUnComplete/${_id}`,{
            method: 'PUT',
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                refetch()
            }
            // console.log(data)
        })
        // console.log(_id)
    }
    // handleDelete
    const handleDelete = (_id)=>{
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

    const handleComment = ()=>{
        toast.warning('It will take some time to be available This feature')
    }
    return (
        <div className='mt-20'>
          <h1 className='text-3xl text-center font-bold pb-10'>All completed Tasks</h1>

            {/* task table  */}
            <div className=' max-w-[750px] mx-auto'>
                <table>
                    <thead className="bg-gray-300 ">
                        <tr className="text-left">
                            <th className="p-3">Task ID</th>
                            <th className="p-3">Task title </th>
                            <th className="p-3">Date </th>
                            <th className="p-3">Action</th>
                            <th className="p-3">Action</th>
                            <th className="p-3">comment </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {completedTasks.map((task, i) => <tr key={i} className="border-b border-opacity-20 border-gray-300 bg-gray-50">
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
                                    <button onClick={()=>handleNotComplete(task._id)}>not complete</button>
                                </span>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md bg-red-300 text-gray-50">
                                    <button onClick={()=>handleDelete(task._id)}>Delete</button>
                                </span>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md bg-gray-400 text-gray-50">
                                    <button onClick={handleComment}>Add a comment </button>
                                </span>
                            </td>
                            
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompletedTask;
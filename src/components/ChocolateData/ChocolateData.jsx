import React from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const ChocolateData = ({ chocolate, chocolates, setChocolates }) => {
    console.log(chocolate);
    const { _id, photo, name, country, category } = chocolate;

    const deleteHandler = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/chocolate/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Chocolate has been deleted.',
                                'success'
                            )
                            const remaining = chocolates.filter(chocolate => chocolate._id !== _id)
                            setChocolates(remaining)
                        }
                    })
            }
        })



    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>{country}</td>
            <th>
                {category}
            </th>
            <th>
                <Link to={`/update/${_id}`}>
                    <button onClick={() => updateHandler(_id)} className=" bg-[#F2F2F2] p-3 rounded-full me-5">
                        <PencilSquareIcon className="h-6 w-6" />
                    </button>
                </Link>
                <button onClick={() => deleteHandler(_id)} className=" bg-[#d72e2e] p-3 rounded-full">
                    <TrashIcon className="h-6 w-6 text-white" />
                </button>
            </th>
        </tr>
    );
};

export default ChocolateData;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChocolateData from '../ChocolateData/ChocolateData';
import { Link } from 'react-router-dom';
import { PlusIcon, PencilSquareIcon } from '@heroicons/react/24/solid'


const Home = () => {
    const allChocolates = useLoaderData()

    return (
        <div>
            <div className="container mx-auto w-2/3">
                <Link to='/add-chocolate'>
                    <button className='border px-2 py-3 mb-5 border-gray-500 rounded-lg flex'>
                        <PlusIcon className="h-6 w-6 me-3" /> 
                        New Chocolate
                    </button>
                </Link>
                <div>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Country</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    allChocolates.map(chocolate => <ChocolateData
                                        key={chocolate._id}
                                        chocolate={chocolate}
                                    ></ChocolateData>)
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
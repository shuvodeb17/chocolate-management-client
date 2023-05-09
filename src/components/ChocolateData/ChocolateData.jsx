import React from 'react';
import { PencilSquareIcon ,TrashIcon} from '@heroicons/react/24/solid'


const ChocolateData = ({ chocolate }) => {
    console.log(chocolate);
    const { photo, name, country, category } = chocolate

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
                <button className=" bg-[#F2F2F2] p-3 rounded-full me-5">
                    <PencilSquareIcon className="h-6 w-6" />
                </button>
                <button className=" bg-[#d72e2e] p-3 rounded-full">
                    <TrashIcon className="h-6 w-6 text-white" />
                </button>
            </th>
        </tr>
    );
};

export default ChocolateData;
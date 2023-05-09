import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {
    const update = useLoaderData()
    const { _id, photo, name, category, country } = update

    const chocolateUpdater = e => {
        e.preventDefault()
        const photo = e.target.photo.value
        const name = e.target.name.value
        const country = e.target.country.value
        const category = e.target.category.value
        const newChocolate = { photo, name, country, category }
        console.log(newChocolate);

        fetch(`http://localhost:5000/chocolate/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newChocolate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div>
            <div className="container mx-auto w-2/3">
                <Link to='/'>
                <button className="btn mb-5">Back</button>
                </Link>
                <hr />

                {/* new chocolate */}
                <div>
                    <div className='bg-[#F3F3F3] mt-5 p-5 rounded'>
                        <div className="text-center">
                            <h1 className='text-2xl'>New Chocolate</h1>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>

                        <form onSubmit={chocolateUpdater}>
                            <div className='w-full px-20'>
                                <p>Photo</p>
                                <input defaultValue={photo} name='photo' type="text" placeholder="Chocolate Photo" className="input input-bordered w-full" />
                            </div>
                            <div className='w-full px-20'>
                                <p>Name</p>
                                <input defaultValue={name} name='name' type="text" placeholder="Chocolate Name" className="input input-bordered w-full" />
                            </div>
                            <div className='w-full px-20 mt-5'>
                                <p>Country</p>
                                <input defaultValue={country} name='country' type="text" placeholder="Country" className="input input-bordered w-full" />
                            </div>
                            <div className='w-full px-20 mt-5'>
                                <p>Category</p>
                                <input defaultValue={category} name='category' type="text" placeholder="Premium or Free" className="input input-bordered w-full" />

                                {/* <select className='input w-full'>
                                    <option name='premium' value="premium">Premium</option>
                                    <option name='free' value="2">Free</option>
                                </select> */}

                            </div>
                            <div className='w-full px-20 mt-5'>
                                <button className="btn btn-block">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;
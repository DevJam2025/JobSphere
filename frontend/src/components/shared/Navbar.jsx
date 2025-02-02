import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-white'>
            <div >
                <div>
                    <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Sphere</span></h1>
                </div>

                <div>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar

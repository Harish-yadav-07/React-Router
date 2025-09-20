
import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img className='rounded-[5%] h-80 w-220 object-cover'
                            src="https://plus.unsplash.com/premium_vector-1756162153798-c0a38d956aad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFib3V0JTIwdXN8ZW58MHx8MHx8fDA%3D"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg">
                            <span className='font-bold'>Lightning-Fast Performance:</span> Our platform is built on modern technologies to ensure a seamless and responsive experience for all users.
                        </p>
                        <p className="mt-4 text-gray-600 text-lg">
                            <span className='font-bold'>Seamless Integration:</span> Easily connect with your existing tools and workflows. Our API is designed for simplicity and power.
                        </p>
                        <p className="mt-4 text-gray-600 text-lg">
                            <span className='font-bold'>Dedicated Support:</span> Get help whenever you need it. Our expert team is available 24/7 to guide you every step of the way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

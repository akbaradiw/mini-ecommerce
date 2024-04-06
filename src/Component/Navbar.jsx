import React from 'react'
const Navbar = () => {
    return (
        <div>
            <nav className="bg-cyan-400">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <p>test</p>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
    
}

export default Navbar